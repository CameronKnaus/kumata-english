import React from 'react';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/OnlineLessons/OnlineLessonsCharacterBox.module.css';
import regularSadKumata from '../../../../Images/Characters/sadKumata.png';
import webpSadKumata from '../../../../Images/webpDist/sadKumata.webp';
import regularHappyKumata from '../../../../Images/Characters/happyKumata.png';
import webpHappyKumata from '../../../../Images/webpDist/happyKumata.webp';
import Image from '../../../UIElements/Image';
import VisibilitySensor from 'react-visibility-sensor';
import { useSprings, animated, useTransition, config } from 'react-spring';

export default function OnlineLessonsCharacterBox({ text }) {
    const [doubtsInView, setDoubtsInView] = React.useState(false);
    const [showHappyKumata, setShowHappyKumata] = React.useState(false);

    const handleVisibilityChange = (setToShow) => {
        // Set visibility true only once so the animation doesn't repeat
        setToShow && !doubtsInView && setDoubtsInView(true);
    };

    // Set up animation properties for list of doubts
    const doubtsList = text.doubtsList;
    const springsList = useSprings(
        doubtsList.length,
        doubtsList.map((doubtItem, index) => {
            const springGroup = {
                config: { mass: 5, tension: 1000, friction: 600 },
                delay: 400 + (index * 700),
                to: {
                    opacity: doubtsInView ? 1 : 0,
                    transform: doubtsInView ? 'scale(1)' : 'scale(0.7)'
                },
                from: { opacity: 0, transform: 'scale(0.7)' }
            };

            // Begin Kumata transition after the first spring rests
            if(index === 0) {
                springGroup.onRest = () => setShowHappyKumata(true);
            }

            return springGroup;
        })
    );

    // Set up transition between sad and happy kumata
    const transitions = useTransition(showHappyKumata, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.gentle
    });

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
                    {
                        transitions(({ opacity }, item) =>
                            item ? (
                                <animated.div style={{
                                        position: 'absolute',
                                        opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] })
                                    }}
                                >
                                    <Image regularImage={regularHappyKumata}
                                           webpImage={webpHappyKumata}
                                           imageBaseType='png' classes={styles.characterImage}
                                    />
                                </animated.div>
                            ) : (
                                <animated.div style={{
                                        position: 'absolute',
                                        opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] })
                                    }}
                                >
                                    <Image regularImage={regularSadKumata}
                                           webpImage={webpSadKumata}
                                           imageBaseType='png' classes={styles.characterImage}
                                    />
                                </animated.div>
                            )
                        )
                    }
                </div>
                <div className={`${styles.solutionText} ${thoughtTextClass}`}>
                    {text.mySolution}
                </div>
            </div>
        </div>
    );
}