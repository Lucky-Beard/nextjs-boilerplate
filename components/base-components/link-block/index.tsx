import Link from 'next/link';
import styles from './index.module.scss';
import { useStyles } from '@/hooks/useStyles';
import ArrowIcon from '@/assets/images/circle-arrow-right.svg';
import Image, { StaticImageData } from 'next/image';
import prettyBytes from 'pretty-bytes';
import { ReactNode } from 'react';

interface Props {
  href: string;
  target?: string;
  children: string | ReactNode;
  style?: object;
  icon?: StaticImageData;
  noHover?: boolean;
  className?: string;
  fileInfo?: {
    fileType: string;
    fileSize: number; // bytes
  };
}

const LinkBlock: React.FC<Props> = ({
  href,
  children,
  style,
  target,
  icon = ArrowIcon,
  noHover = false,
  className,
  fileInfo,
  ...props
}) => {
  const s = useStyles(styles);

  let classes: string[] = [];

  if (noHover) {
    classes.push(s('no-hover'));
  }

  if (className) {
    classes.push(className);
  }

  return (
    <p {...props} className={classes.join(' ')}>
      <Link
        href={href}
        className={s('container')}
        style={style}
        target={target}
      >
        <span className={`${s('text')} utility-button`}>
          {children}
          {fileInfo && (
            <span className={`body-xs bold ${s('file-information')}`}>
              <span>{fileInfo.fileType.toUpperCase()}</span>
              <span className={s('seperator')}></span>
              <span>{prettyBytes(fileInfo.fileSize).toUpperCase()}</span>
            </span>
          )}
        </span>

        <Image src={icon} width={44} height={44} alt="->" />
      </Link>
    </p>
  );
};

export default LinkBlock;
