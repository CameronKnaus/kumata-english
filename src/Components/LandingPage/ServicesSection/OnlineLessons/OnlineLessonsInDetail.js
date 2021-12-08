import React from 'react';
import styles from '../../../../Styles/Components/LandingPage/ServicesSection/OnlineLessons/OnlineLessonsInDetail.module.css';
import LessonDetails from './LessonDetails';
import ExampleLessonsGroup from './ExampleLessonsGroup';
import CostMenu from '../CostMenu';
import LANDING_TEXT from '../../../../Content/LandingPage';
import CharacterTag from './CharacterTag';

export default function OnlineLessonsInDetail() {
    const COST_MENU = LANDING_TEXT.onlineLessons.costMenu;

    return (
        <>
            <div className={styles.blueContainer}>
                <div className='average-container'>
                    <LessonDetails />
                </div>
                <CharacterTag />
                <ExampleLessonsGroup />
            </div>
            {/* TODO Remove marginBottom Div */}
            <div style={{ marginBottom: 200 }}>
                <CostMenu accentColor='var(--navy)'
                          bannerTitle={COST_MENU.bannerTitle}
                          promotion={COST_MENU.promotion}
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