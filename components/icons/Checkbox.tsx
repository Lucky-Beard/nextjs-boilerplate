import { IconDefaultValues, IconProps } from '@/types/icons';

interface Props extends IconProps {}

const CheckboxIcon: React.FC<Props> = ({
  color = IconDefaultValues.color,
  height = 26,
  width = 26
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
        d="M22.3333 1H3.66667C2.19391 1 1 2.19391 1 3.66667V22.3333C1 23.8061 2.19391 25 3.66667 25H22.3333C23.8061 25 25 23.8061 25 22.3333V3.66667C25 2.19391 23.8061 1 22.3333 1Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckboxIcon;
