import React from 'react';
import styles from '../../../Styles/Components/LandingPage/BeeboGoSponsor/BeeboGoSponsor.module.css';
import LANDING_TEXT from '../../../Content/LandingPage';
import { BEEBOGO_HOME_PAGE } from '../../../Constants/SocialMediaConstants';
import SchoolIcon from '@material-ui/icons/School';
import webpLogo from '../../../Images/webpDist/BeeboGoLogo.webp';
import regularLogo from '../../../Images/Other/BeeboGoLogo.png';
import Image from '../../UIElements/Image';

export default function BeeboGoSponsor() {
    const TEXT = LANDING_TEXT.beebogo;

    return (
        <div className={`average-container ${styles.componentWrapper}`}>
            <div className={styles.sectionContainer}>
                <div className={styles.descriptionBanner}>
                    {TEXT.title}
                </div>
                <div className={styles.flexContainer}>
                    <div className={styles.logoContainer}>
                        <Image webpImage={webpLogo}
                               regularImage={regularLogo}
                               classes={styles.logo}
                               imageBaseType='png'
                        />
                    </div>
                    <div className={styles.beeboGoDescription}>
                        <h3 className={styles.descriptionHeader}>
                            {TEXT.descriptionHeader}
                        </h3>
                        <p className={styles.descriptionText}>
                            {TEXT.description}
                        </p>
                        <a href={BEEBOGO_HOME_PAGE}
                           style={{ textDecoration: 'none' }}
                           target='_blank' rel='noreferrer'
                        >
                            <button className={styles.toBeeboGoButton}>
                                <div className={styles.beeboGoIcon}>
                                    <SchoolIcon fontSize='inherit' />
                                </div>
                                {TEXT.toBeeboGo}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}