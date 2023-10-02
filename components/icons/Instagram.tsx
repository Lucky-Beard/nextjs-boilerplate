import { IconDefaultValues, IconProps } from '@/types/icons';

interface Props extends IconProps {}

const InstagramIcon: React.FC<Props> = ({
  color = IconDefaultValues.color,
  height = 22,
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
      <g id="Instagram">
        <path
          id="Exclude"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.93595 21.0445H17.9454C19.89 21.0445 21.4629 19.4715 21.4629 17.527V3.51749C21.4629 1.58158 19.8813 0 17.9454 0H3.93595C2.00003 0 0.418457 1.58158 0.418457 3.51749V17.527C0.418457 19.4629 2.00003 21.0445 3.93595 21.0445ZM18.437 3.91053C18.437 4.48332 17.9727 4.94765 17.3999 4.94765C16.8271 4.94765 16.3628 4.48332 16.3628 3.91053C16.3628 3.33774 16.8271 2.8734 17.3999 2.8734C17.9727 2.8734 18.437 3.33774 18.437 3.91053ZM7.12551 14.3467C8.14532 15.3665 9.50219 15.9283 10.9455 15.9283C12.3888 15.9283 13.737 15.3665 14.7655 14.3467C15.7853 13.3269 16.347 11.97 16.347 10.5267C16.347 9.08342 15.7853 7.72655 14.7655 6.70674C13.7457 5.68692 12.3888 5.12516 10.9455 5.12516C9.50219 5.12516 8.14532 5.68692 7.12551 6.70674C6.1057 7.72655 5.54393 9.08342 5.54393 10.5267C5.54393 11.97 6.1057 13.3269 7.12551 14.3467ZM6.69339 10.5267C6.69339 8.17596 8.60338 6.27461 10.9455 6.27461C13.2876 6.27461 15.189 8.1846 15.1976 10.5267C15.1976 12.8775 13.2876 14.7788 10.9455 14.7788C8.59473 14.7788 6.69339 12.8688 6.69339 10.5267Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default InstagramIcon;
