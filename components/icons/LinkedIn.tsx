import { IconDefaultValues, IconProps } from '@/types/icons';

interface Props extends IconProps {}

const LinkedInIcon: React.FC<Props> = ({
  color = IconDefaultValues.color,
  height = 19,
  width = 18
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="LinkedIn">
        <path
          id="Vector"
          d="M4.42252 6.52051H0.758057V18.2063H4.42252V6.52051Z"
          fill={color}
        />
        <path
          id="Vector_2"
          d="M14.3354 6.26745C14.2003 6.25056 14.0568 6.24212 13.9133 6.23368C11.8615 6.14924 10.7048 7.3651 10.2995 7.88859C10.1897 8.03213 10.139 8.11657 10.139 8.11657V6.55453H6.63501V18.2403H10.139H10.2995C10.2995 17.0497 10.2995 15.8677 10.2995 14.6771C10.2995 14.0354 10.2995 13.3937 10.2995 12.752C10.2995 11.9583 10.2404 11.114 10.6372 10.3879C10.975 9.77993 11.5829 9.47596 12.2668 9.47596C14.2932 9.47596 14.3354 11.3082 14.3354 11.4771C14.3354 11.4855 14.3354 11.494 14.3354 11.494V18.2909H17.9999V10.6665C17.9999 8.05746 16.6743 6.52075 14.3354 6.26745Z"
          fill={color}
        />
        <path
          id="Vector_3"
          d="M2.59064 5.00941C3.76576 5.00941 4.7184 4.05678 4.7184 2.88166C4.7184 1.70653 3.76576 0.753906 2.59064 0.753906C1.41551 0.753906 0.462891 1.70653 0.462891 2.88166C0.462891 4.05678 1.41551 5.00941 2.59064 5.00941Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default LinkedInIcon;
