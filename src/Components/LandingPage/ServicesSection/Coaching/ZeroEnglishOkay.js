import React from 'react';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/Coaching/ZeroEnglishOkay.module.css';
import LANDING_TEXT from '../../../../Content/LandingPage';
import VisibilitySensor from 'react-visibility-sensor';
import { useSpring, animated } from 'react-spring';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { useFormFactor } from '../../../../Util/FormFactorContext';

export default function ZeroEnglishOkay({ readyToShow }) {
    const isXS = useFormFactor().XS;
    const [isVisible, setIsVisible] = React.useState(false);
    const TEXT = LANDING_TEXT.coaching.noEnglishSection;

    const handleVisibilityChange = (setToShow) => {
        // Start the fade in animation immediately within view for XS or when it's within view AND readyToShow prop is true for SM+
        (setToShow || isXS) && !isVisible && setIsVisible(true);
    };

    const springStyle = useSpring({
        config: { mass: 250, tension: 500, friction: 250 },
        to: {
            opacity: readyToShow && isVisible ? 1 : 0
        }
    });

    return (
        <VisibilitySensor onChange={handleVisibilityChange}>
            <animated.div style={springStyle}>
                <h2 className={styles.titleText}>
                    {TEXT.title}
                </h2>
                <p className={styles.descriptionText}>
                    {TEXT.description}
                </p>
                <div className={styles.solutionContainer}>
                    <div className={styles.iconContainer}>
                        <TrendingUpIcon fontSize='inherit' />
                    </div>
                    <span className={styles.solutionText}>
                        {TEXT.solution}
                    </span>
                </div>
            </animated.div>
        </VisibilitySensor>
    );
}