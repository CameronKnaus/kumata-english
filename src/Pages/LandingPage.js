import React from 'react';
import styles from '../Styles/Pages/LandingPage.module.css';
import KumataCoin from '../Components/LandingPage/KumataCoin';
import AboutKumata from '../Components/LandingPage/AboutKumata';
import KumataProfile from '../Components/LandingPage/ProfileSection/KumataProfile';
import CanadaImage from '../Components/LandingPage/CanadaImage';
import OnlineLessons from '../Components/LandingPage/ServicesSection/OnlineLessons/OnlineLessons';
import ServicesHeader from '../Components/LandingPage/ServicesSection/ServicesHeader';
import OnlineLessonsInDetail from '../Components/LandingPage/ServicesSection/OnlineLessons/OnlineLessonsInDetail';

export default function LandingPage() {
    return (
        <>
            <section id='intro-section' className={styles.introSection}>
                <KumataCoin />
                <AboutKumata />
            </section>
            <section id='profile-section'>
                <KumataProfile />
            </section>
            <section id='canada-image-section'>
                <CanadaImage />
            </section>
            <section id='offered-services-section'>
                <ServicesHeader />
                <div id='online-lessons-section'>
                    <OnlineLessons />
                    <OnlineLessonsInDetail />
                </div>
            </section>
        </>
    );
}