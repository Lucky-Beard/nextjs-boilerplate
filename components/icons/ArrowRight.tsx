import { IconDefaultValues, IconProps } from '@/types/icons';
import { HtmlHTMLAttributes } from 'react';

interface Props extends IconProps {}

const ArrowRightIcon: React.FC<Props> = ({
  color = IconDefaultValues.color,
  height = IconDefaultValues.height,
  width = IconDefaultValues.width
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.47998 11.9803H19.47M13.483 5.98828L19.52 12.0003L13.483 18.0123"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRightIcon;
