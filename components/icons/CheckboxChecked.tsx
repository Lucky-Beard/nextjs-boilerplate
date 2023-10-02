import { IconDefaultValues, IconProps } from '@/types/icons';

interface Props extends IconProps {
  background?: string;
  checkbox?: string;
}

const CheckboxCheckedIcon: React.FC<Props> = ({
  background = IconDefaultValues.color,
  checkbox = '#fff',
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
      <g id="Group 2959">
        <path
          id="Path"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 25H4C2.3425 25 1 23.6575 1 22V4C1 2.3425 2.3425 1 4 1H22C23.6575 1 25 2.3425 25 4V22C25 23.6575 23.6575 25 22 25Z"
          fill={background}
          stroke={background}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Path_2"
          d="M19 9L10.875 17L6 12.2"
          stroke={checkbox}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default CheckboxCheckedIcon;
