import { IconDefaultValues, IconProps } from '@/types/icons';

interface Props extends IconProps {}

const PlusIcon: React.FC<Props> = ({
  color = IconDefaultValues.color,
  height = IconDefaultValues.height,
  width = IconDefaultValues.width
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Utility / Plus">
        <path
          id="Vector"
          d="M15.5 10V20M20.5 15H10.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default PlusIcon;
