import React from 'react';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/OnlineLessons/CharacterTag.module.css';
import { Parallax } from 'react-scroll-parallax';
import Image from '../../../UIElements/Image';
import webpBeaver from '../../../../Images/webpDist/beaverChase.webp';
import webpKumata from '../../../../Images/webpDist/kumataChase.webp';
import regularBeaver from '../../../../Images/Characters/beaverChase.png';
import regularKumata from '../../../../Images/Characters/kumataChase.png';
import { useFormFactor } from '../../../../Util/FormFactorContext';

export default function CharacterTag() {
    const isSM = useFormFactor().SM;

    const beaverParallax = isSM ? [-10, 25] : [0, 26];
    const kumataParallax = isSM ? [20, -15] : [3, -12];

    return (
        <div className={styles.sceneContainer}>
            <div className={styles.characterContainer}>
                <div className={styles.beaverContainer}>
                    <Parallax x={beaverParallax}>
                        <Image webpImage={webpBeaver}
                               regularImage={regularBeaver}
                               classes={styles.beaverImage}
                               imageBaseType='png'
                        />
                    </Parallax>
                </div>
            </div>
            <div className={styles.characterContainer}>
                <div className={styles.kumataContainer}>
                    <Parallax x={kumataParallax}>
                        <Image webpImage={webpKumata}
                               regularImage={regularKumata}
                               classes={styles.kumataImage}
                               imageBaseType='png'
                        />
                    </Parallax>
                </div>
            </div>
        </div>
    );
}