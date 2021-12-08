import React from 'react';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/OnlineLessons/ExampleLessonsGroup.module.css';
import LANDING_TEXT from '../../../../Content/LandingPage';
import ExampleLessonCard from './ExampleLessonCard';
import { useFormFactor } from '../../../../Util/FormFactorContext';

export default function ExampleLessonsGroup() {
    const TEXT = LANDING_TEXT.onlineLessons,
        BEGINNER_TEXT = TEXT.beginnerTarget,
        MIDDLE_TEXT = TEXT.middleTarget;

    const titleClass = useFormFactor().XS ? 'header-text' : 'large-header-text';

    return (
        <>
            <h2 className={`${styles.header} ${titleClass}`}>
                {TEXT.exampleLessonsTitle}
            </h2>
            <div className={styles.flexContainer}>
                <ExampleLessonCard title={BEGINNER_TEXT.title}
                                   description={BEGINNER_TEXT.description}
                                   activityList={BEGINNER_TEXT.activityList}
                />
                <ExampleLessonCard title={MIDDLE_TEXT.title}
                                   description={MIDDLE_TEXT.description}
                                   activityList={MIDDLE_TEXT.activityList}
                />
            </div>
        </>
    );
}