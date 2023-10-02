import { IconDefaultValues, IconProps } from '@/types/icons';

interface Props extends IconProps {}

const DownloadIcon: React.FC<Props> = ({
  color = IconDefaultValues.color,
  width = IconDefaultValues.width,
  height = IconDefaultValues.height
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
        d="M12 17V3M20 21H4M17 12L11.999 17.001L6.999 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownloadIcon;
