import { IconDefaultValues, IconProps } from '@/types/icons';

interface Props extends IconProps {}

const TiktokIcon: React.FC<Props> = ({
  color = IconDefaultValues.color,
  height = 20,
  width = 17
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
        id="TikTok"
        d="M12.5322 0.745236L12.0576 0.0224609H9.18509V6.53216L9.1753 12.8907C9.1802 12.9379 9.18509 12.9899 9.18509 13.0371C9.18509 14.6291 7.84427 15.9282 6.19027 15.9282C4.53627 15.9282 3.19545 14.6338 3.19545 13.0371C3.19545 11.4451 4.53627 10.146 6.19027 10.146C6.53282 10.146 6.86557 10.2074 7.17386 10.3114V7.13683C6.85579 7.08487 6.52792 7.05652 6.19027 7.05652C2.77951 7.06125 0 9.74449 0 13.0419C0 16.3392 2.7795 19.0225 6.19516 19.0225C9.61082 19.0225 12.3903 16.3392 12.3903 13.0419V5.4787C13.6284 6.67388 15.2286 7.84071 17 8.21391V4.96851C15.0769 4.14653 13.1635 1.71838 12.5322 0.745236Z"
        fill={color}
      />
    </svg>
  );
};

export default TiktokIcon;
