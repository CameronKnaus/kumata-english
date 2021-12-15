import React from 'react';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/Coaching/CoachingInDetail.module.css';
import CostMenu from '../CostMenu';
import LANDING_TEXT from '../../../../Content/LandingPage';
import CoachingDescriptionParallaxHandler from './CoachingDescriptionParallaxHandler';
import ExampleCoachingGroup from './ExampleCoachingGroup';

export default function CoachingInDetail() {
    const COST_MENU = LANDING_TEXT.coaching.costMenu;

    return (
        <>
            <div className={styles.container}>
                <div className={styles.parallaxContainer}>
                    <CoachingDescriptionParallaxHandler />
                </div>
                <ExampleCoachingGroup />
            </div>
            <div className={styles.costContainer}>
                <CostMenu accentColor='var(--green)'
                          shadowColor='var(--green-dark)'
                          bannerTitle={COST_MENU.bannerTitle}
                          headerCost={COST_MENU.headerCost}
                          menuItems={COST_MENU.menuItems}
                          saleDescription={COST_MENU.saleDescription}
                          emailSubjectLine={COST_MENU.emailSubjectLine}
                          howToApply={COST_MENU.howToApply}
                          disclaimerList={COST_MENU.disclaimerList}
                />
            </div>
        </>
    );
}