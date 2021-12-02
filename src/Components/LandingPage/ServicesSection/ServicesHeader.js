import React from 'react';
import styles from '../../../Styles/Components/LandingPage/ServicesSection/ServicesHeader.module.css';
import LANDING_TEXT from '../../../Content/LandingPage';
import ServiceAnchorButton from './ServiceAnchorButton';

export default function ServicesHeader({ isSM }) {
    const TEXT = LANDING_TEXT.servicesHeader;

    return (
        <div className={`${styles.headerContainer} average-container`}>
            <h2 className={`${isSM ? 'small-title-text' : 'large-title-text'}`}>
                {TEXT.providedServices}
            </h2>
            <p className='body-text'>
                {TEXT.noteAboutModule}
            </p>
            <div className={styles.buttonContainer}>
                <ServiceAnchorButton text={TEXT.lesson} icon='lessons' backgroundColor='var(--navy)' />
                <ServiceAnchorButton text={TEXT.coaching} icon='coaching' backgroundColor='var(--green)' />
                <ServiceAnchorButton text={TEXT.youtube} icon='youtube' backgroundColor='var(--orange)' />
                <ServiceAnchorButton text={TEXT.coaching} icon='instagram' backgroundColor='var(--pink)' />
            </div>
        </div>
    );
}