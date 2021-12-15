import React from 'react';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/Coaching/ExampleCoachingGroup.module.css';
import LANDING_TEXT from '../../../../Content/LandingPage';

export default function ExampleCoachingGroup() {
    const TEXT = LANDING_TEXT.coaching.coachingContentsSection;

    return (
        <div className='average-container'>
            <div className={styles.exampleTile}>
                <h2 className={styles.header}>
                    {TEXT.header}
                </h2>
                <ul className={styles.exampleList}>
                    {
                    TEXT.coachingContents.map((item, index) => (
                        <li key={`coaching-content-${index}`}>
                            {item}
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    );
}