import { IconDefaultValues, IconProps } from '@/types/icons';

interface Props extends IconProps {}

const YouTubeIcon: React.FC<Props> = ({
  color = IconDefaultValues.color,
  height = 15,
  width = 22
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="YouTube">
        <path
          id="Exclude"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.56205 14.7124H17.9436C19.8679 14.7124 21.4261 13.0191 21.4183 10.9174V4.12709C21.4183 2.03385 19.8679 0.332031 17.9436 0.332031H3.56205C1.64555 0.332031 0.0874023 2.02534 0.0874023 4.12709V10.9174C0.0874023 13.0106 1.63775 14.7124 3.56205 14.7124ZM8.47596 3.92713L14.5259 7.41586L8.47596 10.9046V3.92713Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default YouTubeIcon;
