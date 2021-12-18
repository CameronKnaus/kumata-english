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
            <CostMenu accentColor='var(--theme-navy)'
                      shadowColor='var(--theme-navy-dark)'
                      bannerTitle={COST_MENU.bannerTitle}
                      headerCost={COST_MENU.headerCost}
                      menuItems={COST_MENU.menuItems}
                      saleDescription={COST_MENU.saleDescription}
                      emailSubjectLine={COST_MENU.emailSubjectLine}
                      howToApply={COST_MENU.howToApply}
                      disclaimerList={COST_MENU.disclaimerList}
            />
        </>
    );
}