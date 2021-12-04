import React from 'react';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/OnlineLessons/OnlineLessonsInDetail.module.css';
import LessonDetails from './LessonDetails';
import ExampleLessonsGroup from './ExampleLessonsGroup';

export default function OnlineLessonsInDetail() {

    return (
        <div className={styles.sectionContainer}>
            <div className='average-container'>
                <LessonDetails />
                <ExampleLessonsGroup />
            </div>
        </div>
    );
}