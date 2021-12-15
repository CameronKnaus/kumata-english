import React from 'react';
import styles from '../../../Styles/Components/LandingPage/ServicesSection/ServicesHeader.module.css';
import LANDING_TEXT from '../../../Content/LandingPage';
import ServiceAnchorButton from './ServiceAnchorButton';
import { useFormFactor } from '../../../Util/FormFactorContext';
import scrollToTarget from '../../../Util/ScrollToTarget';
import ServicesNavBar from './ServicesNavBar';

export default function ServicesHeader() {
    const TEXT = LANDING_TEXT.servicesHeader;
    const formFactor = useFormFactor();
    const servicesGroupRef = React.useRef();
    const [showNavBar, setShowNavBar] = React.useState(false);

    let titleClassName = 'large-title-text';
    formFactor.SM && (titleClassName = 'small-title-text');
    formFactor.XS && (titleClassName = 'large-header-text');

    let noteTextClass = 'body-text';
    formFactor.XS && (noteTextClass = 'reduced-body-text');

    const scrollHandler = () => {
        const additionalOffset = formFactor.XS ? 300 : 250;
        const groupOffsetY = servicesGroupRef.current.offsetTop + additionalOffset;
        const pageOffset = window.pageYOffset;

        setShowNavBar(groupOffsetY < pageOffset);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <ServicesNavBar show={showNavBar} />
            <div ref={servicesGroupRef} className={`${styles.headerContainer} average-container`}>
                <h2 className={titleClassName}>
                    {TEXT.providedServices}
                </h2>
                <p className={noteTextClass}>
                    {TEXT.noteAboutModule}
                </p>
                <div className={styles.buttonContainer}>
                    <ServiceAnchorButton text={TEXT.lesson}
                                         icon='lessons'
                                         backgroundColor='var(--navy)'
                                         clickHandler={(event) => scrollToTarget({ targetId: 'online-lessons-section', delay: 200 }, event)}
                    />
                    <ServiceAnchorButton text={TEXT.coaching}
                                         icon='coaching'
                                         backgroundColor='var(--purple)'
                                         clickHandler={(event) => scrollToTarget({ targetId: 'coaching-section', delay: 200 }, event)}
                    />
                    <ServiceAnchorButton text={TEXT.youtube}
                                         icon='youtube'
                                         backgroundColor='var(--orange)'
                    />
                    <ServiceAnchorButton text={TEXT.instagram}
                                         icon='instagram'
                                         backgroundColor='var(--pink)'
                    />
                </div>
            </div>
        </>
    );
}