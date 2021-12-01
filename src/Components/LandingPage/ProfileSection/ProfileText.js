import React from 'react';
import styles from '../../../Styles/Components/LandingPage/ProfileSection/ProfileText.module.css';
import LANDING_TEXT from '../../../Content/LandingPage';

export default function ProfileText() {

    return (
        <>
            <h2 className={`${styles.profileTitle} small-title-text`}>
                {LANDING_TEXT.profile}
            </h2>
            <ul className={styles.accoladeList}>
                {
                    LANDING_TEXT.accolades.map(accolade => (
                        <li key={accolade} className='large-header-text'>
                            {accolade}
                        </li>
                    ))
                }
            </ul>
        </>
    );
}