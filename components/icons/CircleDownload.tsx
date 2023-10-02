import { HtmlHTMLAttributes } from 'react';
import styles from './index.module.scss';
import { useStyles } from '@/hooks/useStyles';
import React from 'react';
import DownloadIcon from './Download';

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  button?: boolean;
}

const CircleDownloadIcon: React.FC<Props> = ({ ...props }) => {
  const s = useStyles(styles);
  const { style, className } = props;

  return (
    <div style={style} className={`${className} ${s('circle')}`} {...props}>
      <DownloadIcon />
    </div>
  );
};

export default CircleDownloadIcon;
