import React from 'react';

export default function GradiantTransition() {

    const styling = {
        width: '100%',
        height: 15,
        background: 'linear-gradient(to right, var(--tertiary-color) 15%, var(--dark-accent) 85%)'
    };

    return <div style={styling} />;
}