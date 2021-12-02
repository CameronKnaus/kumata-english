import React from 'react';
import styles from '../../../Styles/Components/LandingPage/ProfileSection/KumataProfile.module.css';
import Image from '../../UIElements/Image';
import webpImage from '../../../Images/webpDist/SnowKumata.webp';
import regularImage from '../../../Images/Characters/SnowKumata.jpg';
import webpImageTall from '../../../Images/webpDist/TallSnowKumata.webp';
import regularImageTall from '../../../Images/Characters/TallSnowKumata.jpg';
import ProfileText from './ProfileText';
import { Parallax } from 'react-scroll-parallax';

export default function KumataProfile({ isSM }) {
    if(isSM) {
        return (
            <>
                <Image webpImage={webpImage} regularImage={regularImage} imageBaseType='png' classes={styles.smallSnowKumataImage} />
                <ProfileText small />
            </>
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
                <Image webpImage={webpImageTall} regularImage={regularImageTall} imageBaseType='png' classes={styles.snowKumataImage} />
            </Parallax>
        </div>
    );
}