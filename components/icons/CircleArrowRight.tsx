import { HtmlHTMLAttributes } from 'react';
import styles from './index.module.scss';
import { useStyles } from '@/hooks/useStyles';
import React from 'react';
import ArrowRightIcon from './ArrowRight';

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  button?: boolean;
  color?: string;
}

const CircleArrowRightIcon: React.FC<Props> = ({
  style = {},
  className,
  color = '#000',
  ...props
}) => {
  const s = useStyles(styles);

  const iconColor: object = color ? { borderColor: color } : {};

  const extraStyles = {
    ...style,
    ...iconColor
  };

  return (
    <div
      style={extraStyles}
      className={`${className} ${s('circle')}`}
      {...props}
    >
      <ArrowRightIcon color={color} />
    </div>
  );
};

export default CircleArrowRightIcon;
