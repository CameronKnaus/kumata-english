import React from 'react';
import canadaPic from '../../Images/Other/Canada.jpg';
import canadaWebP from '../../Images/webpDist/Canada.webp';
import Image from '../UIElements/Image';
import styles from '../../Styles/Components/LandingPage/CanadaImage.module.css';

export default function CanadaImage() {

    return (
        <div className={`${styles.imageContainer}`}>
            <Image regularImage={canadaPic} webpImage={canadaWebP} imageBaseType='jpg' classes={styles.image} />
        </div>
    );
}