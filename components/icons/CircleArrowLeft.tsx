import { HtmlHTMLAttributes } from 'react';
import styles from './index.module.scss';
import { useStyles } from '@/hooks/useStyles';
import React from 'react';
import ArrowLeftIcon from './ArrowLeft';

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  button?: boolean;
}

const CircleArrowLeftIcon: React.FC<Props> = ({ ...props }) => {
  const s = useStyles(styles);
  const { style, className } = props;

  return (
    <div style={style} className={`${className} ${s('circle')}`} {...props}>
      <ArrowLeftIcon />
    </div>
  );
};

export default CircleArrowLeftIcon;
