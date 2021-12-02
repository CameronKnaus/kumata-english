import React from 'react';
import { animated, useSpring, config } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

export default function AccoladeItem({ accolade, small }) {
    const [isVisible, setIsVisible] = React.useState(false);

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
            <animated.li style={animatedStyle} className={`${small ? 'large-header-text' : 'large-header-text'}`}>
                {accolade}
            </animated.li>
        </VisibilitySensor>
    );
}