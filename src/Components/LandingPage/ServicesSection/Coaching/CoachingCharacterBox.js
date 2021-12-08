import React from 'react';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/Coaching/CoachingCharacterBox.module.css';
import regularImage from '../../../../Images/Characters/kumataCoachingBeaver.png';
import webpImage from '../../../../Images/webpDist/kumataCoachingBeaver.webp';
import Image from '../../../UIElements/Image';
import LANDING_TEXT from '../../../../Content/LandingPage';

export default function CoachingCharacterBox() {
    const wordList = LANDING_TEXT.coaching.coachingLearnedWords;
    const [wordIndex, setWordIndex] = React.useState(0);
    const [showWord, setShowWord] = React.useState(false);

    // Get a reference to this component to avoid memory leak with async functions and unmounting
    const mountedRef = React.useRef(true);

    // When the component is being unmounted, set the mountedRef to be false
    React.useEffect(() => {
        return () => {
            mountedRef.current = false;
        };
    }, []);


    React.useEffect(() => {
        const interval = setInterval(() => {
            setShowWord(false);
            setTimeout(() => {
                let currentIndex = wordIndex;
                if(currentIndex === wordList.length - 1) {
                    currentIndex = 0;
                } else {
                    ++currentIndex;
                }
                // Only update if the component is still mounted
                if(mountedRef.current) {
                    setWordIndex(currentIndex);
                    setShowWord(true);
                }
            }, 50);
        }, 1950);

        return () => clearInterval(interval);
    }, [wordIndex, wordList.length]);

    return (
        <div className={styles.container}>
            <div className={styles.levelUpContainer}>
                <div className={styles.learnWordAnimation}>
                    {showWord ? '+ ' + wordList[wordIndex] : ''}
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image regularImage={regularImage}
                       webpImage={webpImage}
                       imageBaseType='png' classes={styles.characterImage}
                />
            </div>
        </div>
    );
}