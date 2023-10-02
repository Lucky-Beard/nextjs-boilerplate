import { IconDefaultValues, IconProps } from '@/types/icons';

interface Props extends IconProps {}

const FacebookIcon: React.FC<Props> = ({
  color = IconDefaultValues.color,
  height = 22,
  width = 13
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
        id="Facebook"
        d="M7.87626 12.231V21.0225H3.82694V12.231H0.462891V8.66632H3.82694V7.36935C3.82694 2.55427 5.84381 0.0224609 10.1112 0.0224609C11.4194 0.0224609 11.7465 0.23215 12.4629 0.403008V3.9289C11.6608 3.7891 11.435 3.71144 10.6018 3.71144C9.61279 3.71144 9.08327 3.99103 8.60046 4.54243C8.11766 5.09384 7.87626 6.04909 7.87626 7.41595V8.67409H12.4629L11.2325 12.2388H7.87626V12.231Z"
        fill={color}
      />
    </svg>
  );
};

export default FacebookIcon;
