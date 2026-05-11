import CoachingDoubts from './CoachingDoubts';
import { useFormFactor } from '../../../../Util/useFormFactor';
import { Parallax } from 'react-scroll-parallax';
import webpKumata from '../../../../Images/webpDist/CoachKumata.webp';
import regularKumata from '../../../../Images/Characters/CoachKumata.png';
import Image from '../../../UIElements/Image';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/Coaching/CoachingDescriptionParallaxHandler.module.css';
import ZeroEnglishOkay from './ZeroEnglishOkay';

export default function CoachingDescriptionParallaxHandler() {
  const isSM = useFormFactor().SM;

  if (isSM) {
    return (
      <div className="average-container">
        <CoachingDoubts />
        <div className={styles.imageContainer}>
          <Image
            webpImage={webpKumata}
            regularImage={regularKumata}
            classes={styles.image}
            imageBaseType="png"
          />
        </div>
        <ZeroEnglishOkay />
      </div>
    );
  }

  return (
    <div className="average-container">
      <div className={styles.contentContainer}>
        <Parallax translateY={[30, -10]}>
          <CoachingDoubts />
          <ZeroEnglishOkay />
        </Parallax>
      </div>
      <div className={styles.imageContainer}>
        <Parallax translateY={[0, 30]}>
          <Image
            webpImage={webpKumata}
            regularImage={regularKumata}
            classes={styles.image}
            imageBaseType="png"
          />
        </Parallax>
      </div>
    </div>
  );
}
