import React from 'react';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/OnlineLessons/OnlineLessonsInDetail.module.css';
import LessonDetails from './LessonDetails';
// import LANDING_TEXT from '../../../../Content/LandingPage';
// import { useFormFactor } from '../../../../Util/FormFactorContext';

export default function OnlineLessonsInDetail() {

    return (
        <div className={styles.sectionContainer}>
            <div className='average-container'>
                <LessonDetails />
            </div>
        </div>
    );
}