import React from 'react';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/OnlineLessons/ExampleLessonCard.module.css';

export default function ExampleLessonCard({ title, description, activityList }) {
    if(!activityList || !title) {
        return null;
    }

    return (
        <div className={styles.lessonTile}>
            <h3 className={styles.lessonTileTitle}>
                {title}
            </h3>
            <div className={styles.activityGroup}>
                {
                    activityList.map((activityGroup, index) => (
                        <div key={`${title}-activity-${index}`} className={styles.activityWrapper}>
                            <div className={styles.timeFrame}>
                                {activityGroup.timeFrame}
                            </div>
                            {
                                Array.isArray(activityGroup.activity) ?
                                    activityGroup.activity.map((item, index) => (
                                        <div key={`${title}-activity-list-${index}`} className={styles.activityDescription}>
                                            {item}
                                        </div>
                                    ))
                                 : (
                                     <div className={styles.activityDescription}>
                                         {activityGroup.activity}
                                     </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
            {
                description && (
                    <p className={styles.descriptionText}>
                        {description}
                    </p>
                )
            }
        </div>
    );
}