import Image from 'next/legacy/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';
import { useStyles } from '@/hooks/useStyles';

interface Props {
  src: string | StaticImageData;
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<Props> = ({
  src,
  className,
  width = 221,
  height = 60
}) => {
  const s = useStyles(styles);

  return (
    <Link href="/" className={`${s('logo')} ${className ? className : ''}`}>
      <Image
        loading="lazy"
        src={src}
        width={width}
        height={height}
        alt="Burstone"
      />
    </Link>
  );
};

export default Logo;
