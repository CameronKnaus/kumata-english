import React from 'react';
import { animated, useSpring, config } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import { useFormFactor } from '../../../Util/FormFactorContext';

export default function AccoladeItem({ accolade }) {
    const [isVisible, setIsVisible] = React.useState(false);
    const isSM = useFormFactor().SM;

    const handleVisibilityChange = (newValue) => {
        // Intentionally only setting true once
        newValue && !isVisible && setIsVisible(true);
    };

    const animatedStyle = useSpring({
        config: { ...config.slow },
        delay: 200,
        to: {
            opacity: isVisible ? 1 : 0,
            transform: isVisible
                ? 'translateY(0)'
                : 'translateY(50px)'
        }
    });

    return (
        <VisibilitySensor onChange={handleVisibilityChange}>
            <animated.li style={animatedStyle} className={`${isSM ? 'header-text' : 'large-header-text'}`}>
                {accolade}
            </animated.li>
        </VisibilitySensor>
    );
}