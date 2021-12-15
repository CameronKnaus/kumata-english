import React from 'react';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/Coaching/CoachingDoubts.module.css';
import LANDING_TEXT from '../../../../Content/LandingPage';
import { animated, config, useSpring, useSprings } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import FireIcon from '@material-ui/icons/Whatshot';

export default function CoachingDoubts({ onAnimComplete }) {
    const [listInView, setListInView] = React.useState(false);
    const TEXT = LANDING_TEXT.coaching.selfDoubtSection;

    const handleVisibilityChange = (setToShow) => {
        setToShow && !listInView && setListInView(true);
    };

    const doubtsList = TEXT.doubtsList;
    const doubtsListSprings = useSprings(
        doubtsList.length,
        doubtsList.map((doubtItem, index) => {
            return {
                config: { mass: 5, tension: 1000, friction: 600 },
                delay: 400 + (index * 300),
                to: {
                    opacity: listInView ? 1 : 0,
                    transform: listInView ? 'translateX(0)' : 'translateX(-20px)'
                },
                from: { opacity: 0, transform: 'translateX(-20px)' }
            };
        })
    );

    const solutionSpring = useSpring({
        config: { ...config.slow },
        delay: 1400,
        to: {
            opacity: listInView ? 1 : 0,
            transform: listInView
                ? 'translateY(0)'
                : 'translateY(30px)'
        },
        onRest: () => onAnimComplete(true)
    });

    return (
        <div className={styles.container}>
            <h2 className={styles.titleText}>
                {TEXT.title}
            </h2>
            <div className={styles.textContentWrap}>
                <VisibilitySensor onChange={handleVisibilityChange}>
                    <ul className={styles.doubtsList}>
                        {
                            doubtsList.map((doubt, index) => {
                                return (
                                    <animated.li key={`coaching-doubt-${index}`} className={`${styles.doubtText}`} style={doubtsListSprings[index]}>
                                        { doubtsList[index] }
                                    </animated.li>
                                );
                            })
                        }
                    </ul>
                </VisibilitySensor>
                <animated.div style={solutionSpring} className={styles.solutionContainer}>
                    <div className={styles.iconContainer}>
                        <FireIcon fontSize='inherit' />
                    </div>
                    <span className={styles.solutionText}>
                        {TEXT.solution}
                    </span>
                </animated.div>
            </div>
        </div>
    );
}