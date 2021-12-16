import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../Styles/Components/LandingPage/ProfileSection/ProfileLinkGroup.module.css';
import LANDING_TEXT from '../../../Content/LandingPage';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SmileIcon from '@material-ui/icons/SentimentSatisfiedAlt';

export default function ProfileLinkGroup({ showHeader }) {

    return (
        <div className={styles.componentContainer}>
            {
                showHeader &&
                    <h3 className={styles.headerText}>
                        {LANDING_TEXT.linksAboutMe}
                    </h3>
            }
            <div className={styles.groupContainer}>
                <div className={styles.linkContainer}>
                    <SmileIcon fontSize='inherit' className={styles.icon} style={{ color: 'var(--brown)' }} />
                    <Link to='/about-me' className={styles.link}>
                        <p className={styles.linkText}>
                            <span style={{ textDecoration: 'underline' }}>
                                {LANDING_TEXT.moreAboutMe}
                            </span>
                            {' >'}
                        </p>
                    </Link>
                </div>
                <div className={styles.linkContainer}>
                    <InstagramIcon fontSize='inherit' className={styles.icon} style={{ color: 'var(--instagram-violet)' }} />
                    <a href='https://www.instagram.com/kumataenglish/' className={styles.link}>
                        <p className={styles.linkText}>
                            <span style={{ textDecoration: 'underline' }}>
                                {LANDING_TEXT.myInstagram}
                            </span>
                            {' >'}
                        </p>
                    </a>
                </div>
                <div className={styles.linkContainer}>
                    <YouTubeIcon fontSize='inherit' className={styles.icon} style={{ color: 'var(--youtube-red)' }} />
                    <a href='https://www.youtube.com/channel/UCWPsPmiSso_y66JhI5bCQTQ/featured' className={styles.link}>
                        <p className={styles.linkText}>
                            <span style={{ textDecoration: 'underline' }}>
                                {LANDING_TEXT.myYoutube}
                            </span>
                            {' >'}
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}