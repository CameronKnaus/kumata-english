import React from 'react';
import styles from '../../Styles/Components/AboutMe/AboutMe.module.css';
import { useNavigate } from 'react-router-dom';
import { PAGE_ROUTES } from '../../Constants/RouteConstants';
import LANDING_TEXT from '../../Content/LandingPage';
import CloseIcon from '@material-ui/icons/Close';
import webpKumata from '../../Images/webpDist/CoachKumata.webp';
import regularKumata from '../../Images/Characters/CoachKumata.png';
import Image from '../UIElements/Image';

const HEADER_STYLES = [
    styles.headerOne,
    styles.headerTwo,
    styles.headerThree
];

export default function AboutMe() {
    const navigate = useNavigate();
    const ABOUT_ME = LANDING_TEXT.aboutMeSection;

    React.useEffect(() => {
        // Lock the background page.  Only unlock it when this modal is closed.
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'scroll';
        };
    }, []);

    return (
        <>
            <div className={styles.dimmedBackground} onClick={() => navigate(PAGE_ROUTES.landingPage)} />
            <div className={styles.pageContainer}>
                <div className={`${styles.modalHeader} large-header-text`}>
                    <div className={styles.introText}>
                        {ABOUT_ME.sectionTitle}
                    </div>
                    <button className={styles.closeButton} onClick={() => navigate(PAGE_ROUTES.landingPage)}>
                        <CloseIcon fontSize='inherit' />
                    </button>
                </div>
                <div className={styles.modalContainer}>
                    <div className={styles.imageContainer}>
                        <Image webpImage={webpKumata} regularImage={regularKumata} classes={styles.image} imageBaseType='png' />
                    </div>
                    {
                            ABOUT_ME.textGroups.map((textGroup, index) => (
                                <div key={`text-group-${index}`}>
                                    <h2 className={`${index === 0 ? 'header-text' : 'small-header-text'} ${HEADER_STYLES[index]}`}>
                                        {textGroup.header}
                                    </h2>
                                    {
                                        textGroup.paragraphs.map((paragraph, paragraphIndex) => (
                                            <p key={`text-group-${index}-paragraph-${paragraphIndex}`} className='body-text'>
                                                {paragraph}
                                            </p>
                                        ))
                                    }
                                </div>
                            ))
                        }
                </div>
            </div>
        </>
    );
}