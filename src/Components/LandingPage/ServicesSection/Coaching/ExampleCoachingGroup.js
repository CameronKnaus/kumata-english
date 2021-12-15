import React from 'react';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/Coaching/ExampleCoachingGroup.module.css';

export default function ExampleCoachingGroup({ header, contentList = [] }) {

    return (
        <div className='average-container'>
            <div className={styles.exampleTile}>
                <h2 className={styles.header}>
                    {header}
                </h2>
                <ul className={styles.exampleList}>
                    {
                        contentList.map((item, index) => (
                            <li key={`coaching-content-${index}`}>
                                {item}
                            </li>
                    ))
                }
                </ul>
            </div>
        </div>
    );
}