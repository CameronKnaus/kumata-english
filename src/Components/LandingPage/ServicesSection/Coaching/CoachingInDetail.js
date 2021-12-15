import React from 'react';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/Coaching/CoachingInDetail.module.css';
import CostMenu from '../CostMenu';
import LANDING_TEXT from '../../../../Content/LandingPage';
import CoachingDescriptionParallaxHandler from './CoachingDescriptionParallaxHandler';
import ExampleCoachingGroup from './ExampleCoachingGroup';

export default function CoachingInDetail() {
    const TEXT = LANDING_TEXT.coaching;
    const COST_MENU = TEXT.costMenu;

    return (
        <>
            <div className={styles.container}>
                <div className={styles.parallaxContainer}>
                    <CoachingDescriptionParallaxHandler />
                </div>
                <ExampleCoachingGroup header={TEXT.importantTopics.header}
                                      contentList={TEXT.importantTopics.pointsList}
                />
                <ExampleCoachingGroup header={TEXT.coachingContentsSection.header}
                                      contentList={TEXT.coachingContentsSection.coachingContents}
                />
                <div className={styles.closingRemarksContainer}>
                    <h3 className={styles.closingHeader}>
                        {TEXT.closingHeader}
                    </h3>
                    <p className={styles.closingDescLine}>
                        {TEXT.closingDescLine}
                    </p>
                </div>
            </div>
            <div className={styles.costContainer}>
                <CostMenu accentColor='var(--purple)'
                          shadowColor='var(--purple-dark)'
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