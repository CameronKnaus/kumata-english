import React from 'react';
import styles from '../../../Styles/Components/LandingPage/ProfileSection/ProfileText.module.css';
import LANDING_TEXT from '../../../Content/LandingPage';
import AccoladeItem from './AccoladeItem';

export default function ProfileText({ small }) {

    return (
        <>
            <h2 className={`${styles.profileTitle} small-title-text`}>
                {LANDING_TEXT.profile}
            </h2>
            <ul className={styles.accoladeList}>
                {
                    LANDING_TEXT.accolades.map(accolade => (
                        <AccoladeItem key={accolade} accolade={accolade} small={small} />
                    ))
                }
            </ul>
        </>
    );
}