import { IconDefaultValues, IconProps } from '@/types/icons';

interface Props extends IconProps {}

const CheckFilledIcon: React.FC<Props> = ({
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21ZM16.5303 9.46967C16.8232 9.76256 16.8232 10.2374 16.5303 10.5303L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23744 11.1768 8.53033 11.4697L11 13.9393L15.4697 9.46967C15.7626 9.17678 16.2374 9.17678 16.5303 9.46967Z"
        fill={color}
      />
    </svg>
  );
};

export default CheckFilledIcon;
