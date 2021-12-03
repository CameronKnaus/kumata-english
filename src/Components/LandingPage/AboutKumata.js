import React from 'react';
import styles from '../../Styles/Components/LandingPage/AboutKumata.module.css';
import LANDING_TEXT from '../../Content/LandingPage';
import { useFormFactor } from '../../Util/FormFactorContext';

const textAlignment = [
    'left',
    'left',
    'right'
];

export default function AboutKumata() {
    const isXS = useFormFactor().XS;

    return (
        <div className='average-container hand-written'>
            <h1 className={`${styles.imKumata} ${isXS ? 'large-header-text' : 'small-title-text'}`}>
                {LANDING_TEXT.kumataName}
            </h1>
            <div className={styles.descriptionContainer}>
                { LANDING_TEXT.kumataOpeningLines.map((line, index) => (
                    <p key={`about-line-${index}`} // eslint-disable-line
                       className={`${isXS ? 'small-header-text' : 'header-text'}`}
                       style={{ textAlign: textAlignment[index] }}
                    >
                        {line}
                    </p>
                ))}
            </div>
        </div>
    );
}