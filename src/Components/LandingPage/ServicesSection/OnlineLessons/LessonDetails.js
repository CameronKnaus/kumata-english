import React from 'react';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/OnlineLessons/LessonDetails.module.css';
import LANDING_TEXT from '../../../../Content/LandingPage';

export default function LessonDetails() {
    const TEXT = LANDING_TEXT.onlineLessons;

    return (
        <div className={styles.detailsFlexContainer}>
            <div className={styles.detailsBlock}>
                <h2 className={`large-header-text ${styles.lessonDetailsTitle}`}>
                    {TEXT.lessonDetailsTitle}
                </h2>
                <ul className={styles.detailsList}>
                    {
                        TEXT.lessonDetailsList.map((detail, index) => (
                            <li key={`lesson-detail-${index}`}
                                className={detail.isMainPoint ? styles.mainDetail : styles.secondaryDetail}
                            >
                                {detail.text}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={styles.detailsBlock}>
                <h2 className={`large-header-text ${styles.targetAudienceTitle}`}>
                    {TEXT.targetAudience}
                </h2>
                <ul className={styles.targetList}>
                    {
                        TEXT.targetAudienceList.map((target, index) => (
                            <li key={`target-audience-member-${index}`}>
                                {target}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}