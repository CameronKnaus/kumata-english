import OnlineLessonsCharacterBox from './OnlineLessonsCharacterBox';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/OnlineLessons/OnlineLessons.module.css';
import LANDING_TEXT from '../../../../Content/LandingPage';
import { useFormFactor } from '../../../../Util/useFormFactor';

export default function OnlineLessons() {
  const TEXT = LANDING_TEXT.onlineLessons;
  const isSM = useFormFactor().SM;

  return (
    <div className={styles.flexContainer}>
      {isSM && <OnlineLessonsCharacterBox text={TEXT.kumataTalk} />}
      <div className={styles.contentBox}>
        <div className={styles.textWrapper}>
          <h3 className={styles.titleText}>{TEXT.eikaiwa}</h3>
          <h4 className={styles.manToManText}>{TEXT.manToMan}</h4>
          <h5 className={styles.answerAllQuestionsText}>
            {TEXT.answerAllQuestions}
          </h5>
          <p className={styles.descriptionText}>{TEXT.serviceDescription}</p>
        </div>
      </div>
      {!isSM && <OnlineLessonsCharacterBox text={TEXT.kumataTalk} />}
    </div>
  );
}
