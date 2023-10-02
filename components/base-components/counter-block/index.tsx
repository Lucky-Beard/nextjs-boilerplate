// import CountUp from 'react-countup'; // consider uninstalling this?
import styles from './index.module.scss';
import { useStyles } from '@/hooks/useStyles';

interface Props {
  total: number | string;
  heading: string;
  text: string;
  addPlusSign?: boolean;
  disableCount?: boolean;
}

const CounterBlock: React.FC<Props> = ({
  total,
  heading,
  text,
  addPlusSign = false,
  disableCount = false,
  ...props
}) => {
  const s = useStyles(styles);

  return (
    <div className={s('container')} {...props}>
      <div className={s('details')}>
        <p className={s('number')}>
          <span data-animation={!disableCount ? 'number-counter' : 'none'}>
            {total}
          </span>
          {addPlusSign ? '+' : ''}
        </p>
        <p className="body-l bold">{heading}</p>
      </div>
      <span className={s('seperator')} />
      <p className="body-s">{text}</p>
    </div>
  );
};

export default CounterBlock;
