import { IconDefaultValues, IconProps } from '@/types/icons';

interface Props extends IconProps {}

const ArrowLeftIcon: React.FC<Props> = ({
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
        d="M4.00995 11.9803H19M10.013 5.98828L4.00195 12.0003L10.013 18.0123"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
