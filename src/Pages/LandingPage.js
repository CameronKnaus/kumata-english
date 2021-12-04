import React, { Suspense } from 'react';
import styles from '../Styles/Pages/LandingPage.module.css';
import KumataCoin from '../Components/LandingPage/KumataCoin';
import AboutKumata from '../Components/LandingPage/AboutKumata';
import KumataProfile from '../Components/LandingPage/ProfileSection/KumataProfile';

// Lower end of the page can be lazily loaded
const CanadaImage = React.lazy(() => import('../Components/LandingPage/CanadaImage'));
const OnlineLessons = React.lazy(() => import('../Components/LandingPage/ServicesSection/OnlineLessons/OnlineLessons'));
const ServicesHeader = React.lazy(() => import('../Components/LandingPage/ServicesSection/ServicesHeader'));
const OnlineLessonsInDetail = React.lazy(() => import('../Components/LandingPage/ServicesSection/OnlineLessons/OnlineLessonsInDetail'));


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
                <Suspense fallback=''>
                    <CanadaImage />
                </Suspense>
            </section>
            <section id='offered-services-section'>
                <Suspense fallback=''>
                    <ServicesHeader />
                </Suspense>
                <div id='online-lessons-section'>
                    <Suspense fallback=''>
                        <OnlineLessons />
                    </Suspense>
                    <Suspense fallback=''>
                        <OnlineLessonsInDetail />
                    </Suspense>
                </div>
            </section>
        </>
    );
}