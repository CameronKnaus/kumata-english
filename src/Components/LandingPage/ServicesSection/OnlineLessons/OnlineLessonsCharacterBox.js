import React from 'react';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/OnlineLessons/OnlineLessonsCharacterBox.module.css';
import regularImage from '../../../../Images/Characters/BashfulKumata.png';
import webpImage from '../../../../Images/webpDist/BashfulKumata.webp';
import Image from '../../../UIElements/Image';
import VisibilitySensor from 'react-visibility-sensor';
import { useSprings, animated } from 'react-spring';

export default function OnlineLessonsCharacterBox({ text }) {
    const [doubtsInView, setDoubtsInView] = React.useState(false);

    const handleVisibilityChange = (setToShow) => {
        // Set visibility true only once so the animation doesn't repeat
        setToShow && !doubtsInView && setDoubtsInView(true);
    };

    // Set up animation properties
    const doubtsList = text.doubtsList;
    const springsList = useSprings(
        doubtsList.length,
        doubtsList.map((doubtItem, index) => {
            return {
                config: { mass: 5, tension: 1000, friction: 600 },
                delay: 400 + (index * 800),
                to: {
                    opacity: doubtsInView ? 1 : 0,
                    transform: doubtsInView ? 'scale(1)' : 'scale(0.7)'
                },
                from: { opacity: 0, transform: 'scale(0.7)' }
            };
        })
    );

    const thoughtTextClass = 'small-header-text';

    return (
        <div className={styles.container}>
            <div className={styles.textWrap}>
                <VisibilitySensor onChange={handleVisibilityChange}>
                    <div id='doubts-container'>
                        {
                            doubtsList.map((doubt, index) => {
                                return (
                                    <animated.div key={`doubt-${index}`} className={`${styles.thoughtText} ${thoughtTextClass}`} style={springsList[index]}>
                                        { doubtsList[index] }
                                    </animated.div>
                                );
                            })
                        }
                    </div>
                </VisibilitySensor>
                <div className={styles.imageContainer}>
                    <Image regularImage={regularImage}
                           webpImage={webpImage}
                           imageBaseType='png' classes={styles.characterImage}
                    />
                </div>
                <div className={`${styles.solutionText} ${thoughtTextClass}`}>
                    {text.mySolution}
                </div>
            </div>
        </div>
    );
}