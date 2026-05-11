import { animated, useSpring, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { useFormFactor } from '../../../Util/useFormFactor';

interface AccoladeItemProps {
  accolade: string;
}

export default function AccoladeItem({ accolade }: AccoladeItemProps) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const isSM = useFormFactor().SM;

  const animatedStyle = useSpring({
    config: { ...config.slow },
    delay: 200,
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(50px)',
    },
  });

  return (
    <animated.li
      ref={ref}
      style={animatedStyle}
      className={`${isSM ? 'header-text' : 'large-header-text'}`}
    >
      {accolade}
    </animated.li>
  );
}
