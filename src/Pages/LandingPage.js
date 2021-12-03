import React from 'react';
import styles from '../Styles/Pages/LandingPage.module.css';
import KumataCoin from '../Components/LandingPage/KumataCoin';
import AboutKumata from '../Components/LandingPage/AboutKumata';
import KumataProfile from '../Components/LandingPage/ProfileSection/KumataProfile';
import CanadaImage from '../Components/LandingPage/CanadaImage';
import OnlineLessons from '../Components/LandingPage/ServicesSection/OnlineLessons';
import ServicesHeader from '../Components/LandingPage/ServicesSection/ServicesHeader';

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
                <section id='online-lessons-section'>
                    <OnlineLessons />
                </section>
            </section>
        </>
    );
}