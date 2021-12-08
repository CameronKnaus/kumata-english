import React from 'react';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/Coaching/CoachingHeader.module.css';
import LANDING_TEXT from '../../../../Content/LandingPage';
import CoachingCharacterBox from './CoachingCharacterBox';

export default function CoachingHeader() {
    const TEXT = LANDING_TEXT.coaching;

    const textBanner = React.useMemo(() => {
        return (
            <div className={styles.contentBox}>
                <div className={styles.textWrapper}>
                    <h3 className={styles.titleText}>
                        {TEXT.coaching}
                    </h3>
                    <h5 className={styles.descriptionSubHeaderText}>
                        {TEXT.descriptionSubHeader}
                    </h5>
                    <p className={styles.descriptionText}>
                        {TEXT.serviceDescription}
                    </p>
                </div>
            </div>
        );
    }, [TEXT]);

    return (
        <div className={styles.flexContainer}>
            <CoachingCharacterBox />
            {textBanner}
        </div>
    );
}