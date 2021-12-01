import React from 'react';
import styles from '../../Styles/Components/LandingPage/AboutKumata.module.css';
import LANDING_TEXT from '../../Content/LandingPage';

const textAlignment = [
    'left',
    'left',
    'right'
];

export default function AboutKumata({ isXS }) {

    return (
        <div className='average-container hand-written'>
            <h1 className={`${styles.imKumata} ${isXS ? 'extra-large-header-text' : 'small-title-text'}`}>
                {LANDING_TEXT.kumataName}
            </h1>
            <div className={styles.descriptionContainer}>
                { LANDING_TEXT.kumataOpeningLines.map((line, index) => (
                    <p className={`${isXS ? 'header-text' : 'large-header-text'}`}
                       style={{ textAlign: textAlignment[index] }}
                    >
                        {line}
                    </p>
                ))}
            </div>
        </div>
    );
}