import React from 'react';
import { ReactComponent as Kumata } from '../../Images/SVG/Characters/KumataCoin.svg';
import styles from '../../Styles/Components/LandingPage/KumataCoin.module.css';

export default function KumataCoin() {

    return (
        <div className='average-container'>
            <Kumata className={styles.svgImageWrap} />
        </div>
    );
}