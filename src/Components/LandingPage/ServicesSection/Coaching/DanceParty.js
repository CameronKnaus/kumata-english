import React from 'react';
import Image from '../../../UIElements/Image';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/Coaching/DanceParty.module.css';
import webpBeaver from '../../../../Images/webpDist/DancingBeaver.webp';
import regularBeaver from '../../../../Images/Characters/DancingBeaver.png';
import webpKumata from '../../../../Images/webpDist/DancingKumata.webp';
import regularKumata from '../../../../Images/Characters/DancingKumata.png';

export default function DanceParty() {

    return (
        <div className='average-container'>
            <div className={styles.charactersContainer}>
                <div className={styles.beaverContainer}>
                    <Image webpImage={webpBeaver} regularImage={regularBeaver} imageBaseType='png' classes={styles.beaverImage} />
                </div>
                <div className={styles.kumataContainer}>
                    <Image webpImage={webpKumata} regularImage={regularKumata} imageBaseType='png' classes={styles.kumataImage} />
                </div>
            </div>
        </div>
    );
}