import styles from '../../../../Styles/Components/LandingPage/ServicesSection/Coaching/ZeroEnglishOkay.module.css';
import LANDING_TEXT from '../../../../Content/LandingPage';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function ZeroEnglishOkay() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const TEXT = LANDING_TEXT.coaching.noEnglishSection;

  const springStyle = useSpring({
    config: { mass: 250, tension: 500, friction: 250 },
    to: {
      opacity: inView ? 1 : 0,
    },
  });

  return (
    <animated.div ref={ref} style={springStyle}>
      <h2 className={styles.titleText}>{TEXT.title}</h2>
      <p className={styles.descriptionText}>{TEXT.description}</p>
      <div className={styles.solutionContainer}>
        <div className={styles.iconContainer}>
          <TrendingUpIcon fontSize="inherit" />
        </div>
        <span className={styles.solutionText}>{TEXT.solution}</span>
      </div>
    </animated.div>
  );
}
