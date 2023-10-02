import { IconDefaultValues, IconProps } from '@/types/icons';

interface Props extends IconProps {}

const DownIcon: React.FC<Props> = ({
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
        d="M16 10L12 14L8 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownIcon;
