// import CountUp from 'react-countup'; // consider uninstalling this?
import { useGSAP } from '@/hooks/useGSAP';
import styles from './index.module.scss';
import { useStyles } from '@/hooks/useStyles';
import { counterBlocksAnimation } from '@/animations/counter-blocks';

interface Props {
  heading: string;
  text: string;
  seperator?: boolean;
  large?: boolean;
  animate?: boolean;
  appendHeading?: string;
}

const HeroInfoBlock: React.FC<Props> = ({ ...props }) => {
  const s = useStyles(styles);

  const {
    heading,
    text,
    seperator = false,
    large = false,
    animate = false,
    appendHeading = ''
  } = props;

  useGSAP(() => {
    counterBlocksAnimation();
  }, []);

  return (
    <div className={s('container')}>
      <div className={s('details')}>
        <p className={`${large ? 'title-xl' : 'title-s'}`}>
          <span data-animation={animate ? 'number-counter' : 'none'}>
            {heading}
          </span>
          {appendHeading}
        </p>
      </div>
      <p className={large ? 'body-l bold' : 'body-s'}>{text}</p>
      {seperator && <span className={s('seperator')} />}
    </div>
  );
};

export default HeroInfoBlock;
