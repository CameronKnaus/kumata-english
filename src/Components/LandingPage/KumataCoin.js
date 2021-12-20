import React from 'react';
import { ReactComponent as Kumata } from '../../Images/SVG/Characters/KumataCoin.svg';
import styles from '../../Styles/Components/LandingPage/KumataCoin.module.css';
import Image from '../UIElements/Image';
import webpHeaderImage from '../../Images/webpDist/KumataEnglish.webp';
import regularHeaderImage from '../../Images/Other/KumataEnglish.png';

export default function KumataCoin() {

    return (
        <div className='average-container'>
            <div className={styles.headerImageContainer}>
                <Image webpImage={webpHeaderImage}
                       regularImage={regularHeaderImage}
                       classes={styles.headerImage}
                       imageBaseType='png'
                       optionalAlt='Kumata English'
                />
            </div>
            <Kumata className={styles.svgImageWrap} />
        </div>
    );
}