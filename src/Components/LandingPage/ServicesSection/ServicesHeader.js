import React from 'react';
import styles from '../../../Styles/Components/LandingPage/ServicesSection/ServicesHeader.module.css';
import LANDING_TEXT from '../../../Content/LandingPage';
import ServiceAnchorButton from './ServiceAnchorButton';
import { useFormFactor } from '../../../Util/FormFactorContext';

export default function ServicesHeader() {
    const TEXT = LANDING_TEXT.servicesHeader;
    const formFactor = useFormFactor();

    let titleClassName = 'large-title-text';
    formFactor.SM && (titleClassName = 'small-title-text');
    formFactor.XS && (titleClassName = 'large-header-text');

    let noteTextClass = 'body-text';
    formFactor.XS && (noteTextClass = 'reduced-body-text');

    return (
        <div className={`${styles.headerContainer} average-container`}>
            <h2 className={titleClassName}>
                {TEXT.providedServices}
            </h2>
            <p className={noteTextClass}>
                {TEXT.noteAboutModule}
            </p>
            <div className={styles.buttonContainer}>
                <ServiceAnchorButton text={TEXT.lesson} icon='lessons' backgroundColor='var(--navy)' />
                <ServiceAnchorButton text={TEXT.coaching} icon='coaching' backgroundColor='var(--green)' />
                <ServiceAnchorButton text={TEXT.youtube} icon='youtube' backgroundColor='var(--orange)' />
                <ServiceAnchorButton text={TEXT.instagram} icon='instagram' backgroundColor='var(--pink)' />
            </div>
        </div>
    );
}