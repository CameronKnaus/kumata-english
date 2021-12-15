import React from 'react';
import styles from '../../Styles/Components/LandingPage/AboutKumata.module.css';
import LANDING_TEXT from '../../Content/LandingPage';
import { useFormFactor } from '../../Util/FormFactorContext';

export default function AboutKumata() {
    const isXS = useFormFactor().XS;

    return (
        <div className='average-container hand-written'>
            <h1 className={`${styles.imKumata} ${isXS ? 'large-header-text' : 'small-title-text'}`}>
                {LANDING_TEXT.kumataName}
            </h1>
            <div className={styles.descriptionContainer}>
                { LANDING_TEXT.kumataOpeningLines.map((line, index, self) => (
                    <p key={`about-line-${index}`} // eslint-disable-line
                       className={`${isXS ? 'small-header-text' : 'header-text'}`}
                       style={{ textAlign: index === self.length - 1 ? 'right' : 'left' }}
                    >
                        {line}
                    </p>
                ))}
            </div>
        </div>
    );
}