import React from 'react';
import styles from '../../../Styles/Components/LandingPage/ServicesSection/ServicesNavBar.module.css';
import ServiceAnchorButton from './ServiceAnchorButton';
import scrollToTarget from '../../../Util/ScrollToTarget';
import LANDING_TEXT from '../../../Content/LandingPage';

export default function ServicesNavBar({ show }) {
    const TEXT = LANDING_TEXT.servicesHeader;

    return (
        <div className={`${styles.navContainer} ${show ? styles.showNavBar : ''}`}>
            <ServiceAnchorButton slimMode
                                 text={TEXT.lesson}
                                 icon='lessons'
                                 backgroundColor='var(--navy)'
                                 clickHandler={(event) => scrollToTarget({ targetId: 'online-lessons-section', delay: 200 }, event)}
            />
            <ServiceAnchorButton slimMode text={TEXT.coaching}
                                 icon='coaching'
                                 backgroundColor='var(--purple)'
                                 clickHandler={(event) => scrollToTarget({ targetId: 'coaching-section', delay: 200 }, event)}
            />
            <ServiceAnchorButton slimMode text={TEXT.youtube}
                                 icon='youtube'
                                 backgroundColor='var(--orange)'
                                 clickHandler={(event) => scrollToTarget({ targetId: 'youtube-section', delay: 200, scrollTargetTo: 'center' }, event)}
            />
            <ServiceAnchorButton slimMode text={TEXT.instagram}
                                 icon='instagram'
                                 backgroundColor='var(--pink)'
                                 clickHandler={(event) => scrollToTarget({ targetId: 'instagram-section', delay: 200 }, event)}
            />
        </div>
    );
}