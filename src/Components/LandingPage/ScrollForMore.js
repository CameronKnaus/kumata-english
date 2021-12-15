import React from 'react';
import styles from '../../Styles/Components/LandingPage/ScrollForMore.module.css';
import ArrowIcon from '@material-ui/icons/ArrowDownward';
import LANDING_TEXT from '../../Content/LandingPage';
import scrollToTarget from '../../Util/ScrollToTarget';

export default function ScrollForMore() {
    const TEXT = LANDING_TEXT.scrollDown;

    return (
        <a href='/'
           className={styles.anchor}
           onClick={(event) => scrollToTarget({ targetId: 'scroll-down-container-bottom', delay: 200 }, event)}
        >
            <div className={styles.container}>
                <div className={styles.iconContainer}>
                    <ArrowIcon fontSize='inherit' />
                </div>
                <span className={styles.instruction}>
                    {TEXT}
                </span>
            </div>
            <div id='scroll-down-container-bottom' style={{ width: '100%', height: 1 }} />
        </a>
    );
}