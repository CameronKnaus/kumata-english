import React from 'react';
import styles from '../../../Styles/Components/LandingPage/ServicesSection/ServiceAnchorButton.module.css';
import SchoolIcon from '@material-ui/icons/School';
import SportsIcon from '@material-ui/icons/Sports';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useFormFactor } from '../../../Util/FormFactorContext';

const iconMapper = {
    lessons: <SchoolIcon fontSize='inherit' />,
    coaching: <SportsIcon fontSize='inherit' />,
    youtube: <YouTubeIcon fontSize='inherit' />,
    instagram: <InstagramIcon fontSize='inherit' />
};

export default function ServiceAnchorButton({ backgroundColor,
    text,
    icon,
    slimMode = false,
    clickHandler = () => { /* NOOP */ } }
) {
    const isSM = useFormFactor().SM;

    const showText = !isSM || (!slimMode && isSM);
    const iconStyling = slimMode && isSM ? styles.slimIcons : styles.icon;

    return (
        <button className={`${slimMode ? styles.slimButtonStyle : styles.buttonStyle}`} style={{ backgroundColor }} onClick={clickHandler}>
            <div className={iconStyling}>
                {iconMapper[icon] || ''}
            </div>
            {
                showText &&
                <div className={styles.text}>
                    {text}
                </div>
            }
        </button>
    );
}