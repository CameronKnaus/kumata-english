import React from 'react';
import styles from '../../../Styles/Components/LandingPage/ServicesSection/ServiceAnchorButton.module.css';
import SchoolIcon from '@material-ui/icons/School';
import SportsIcon from '@material-ui/icons/Sports';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

const iconMapper = {
    lessons: <SchoolIcon fontSize='inherit' />,
    coaching: <SportsIcon fontSize='inherit' />,
    youtube: <YouTubeIcon fontSize='inherit' />,
    instagram: <InstagramIcon fontSize='inherit' />
};

export default function ServiceAnchorButton({ backgroundColor, text, icon, clickHandler = () => { /* NOOP */ } }) {

    return (
        <button className={styles.buttonStyle} style={{ backgroundColor }} onClick={clickHandler}>
            <div className={styles.icon}>
                {iconMapper[icon] || ''}
            </div>
            <div className={styles.text}>
                {text}
            </div>
        </button>
    );
}