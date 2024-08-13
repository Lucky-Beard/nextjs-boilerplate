import { ReactNode, useState } from 'react';
import styles from './index.module.scss';
import { useStyles } from '@/hooks/useStyles';

interface Props { 
  size?: number; 
}

const Carousel: React.FC<Props> = ({
  size = 4
}) => {
  const s = useStyles(styles);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const calcGap = () => {
    let gap = 4 * activeSlide;

    if (activeSlide === 1) {
      gap = 4;
    }

    return gap;
  }

  const prev = () => {
    const newSlide = activeSlide - 1;

    if (activeSlide >= 0) {
      setActiveSlide(newSlide);
    }
  }

  const next = () => {
    const newSlide = activeSlide + 1;

    if (newSlide < slides.length) {
      setActiveSlide(newSlide);
    }
  }

  const nextDisabled = () => {
    return activeSlide === (slides.length - 1) ? true : false;
  }

  const prevDisabled = () => {
    return activeSlide === 0 ? true : false;
  }

  return (
    <>
      <button onClick={prev} disabled={prevDisabled()}>Prev</button> |&nbsp;
      <button onClick={next} disabled={nextDisabled()}>Next</button>
      <div className={[s('container'), s(`size-${size}`)].join(' ')}>
        {slides.map((item, index) => {
          return (
            <div key={`slide-${index}`} 
              style={{ marginLeft: index === 0 ? `calc((${Math. round(25 * activeSlide)}% + ${calcGap()}px) * -1)` : '' }}>
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Carousel;
