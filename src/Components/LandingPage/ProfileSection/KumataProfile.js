import React from 'react';
import styles from '../../../Styles/Components/LandingPage/ProfileSection/KumataProfile.module.css';
import Image from '../../UIElements/Image';
import webpImage from '../../../Images/webpDist/SnowKumata.webp';
import regularImage from '../../../Images/Characters/SnowKumata.jpg';
import webpImageTall from '../../../Images/webpDist/TallSnowKumata.webp';
import regularImageTall from '../../../Images/Characters/TallSnowKumata.jpg';
import ProfileText from './ProfileText';
import { Parallax } from 'react-scroll-parallax';
import LANDING_TEXT from '../../../Content/LandingPage';
import { useFormFactor } from '../../../Util/FormFactorContext';
import ProfileLinkGroup from './ProfileLinkGroup';

export default function KumataProfile() {
    if(useFormFactor().SM) {
        return (
            <div className={styles.smallContainer}>
                <Image webpImage={webpImage} regularImage={regularImage} imageBaseType='png' classes={styles.smallSnowKumataImage} />
                <ProfileText small />
                <ProfileLinkGroup showHeader />
            </div>
        );
    }

    return (
        <div className={`wide-container ${styles.container} `}>
            <div className={styles.profileTextGroup}>
                <Parallax y={[30, -10]}>
                    <ProfileText />
                </Parallax>
            </div>
            <Parallax y={[0, 30]}>
                <Image webpImage={webpImageTall} regularImage={regularImageTall} imageBaseType='png' classes={styles.snowKumataImage} label={LANDING_TEXT.imageAria} />
                <ProfileLinkGroup />
            </Parallax>
        </div>
    );
}