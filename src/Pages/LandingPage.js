import React  from 'react';
import styles from '../Styles/Pages/LandingPage.module.css';
import KumataCoin from '../Components/LandingPage/KumataCoin';
import AboutKumata from '../Components/LandingPage/AboutKumata';
import KumataProfile from '../Components/LandingPage/ProfileSection/KumataProfile';
import CanadaImage from '../Components/LandingPage/CanadaImage';
import OnlineLessons from '../Components/LandingPage/ServicesSection/OnlineLessons/OnlineLessons';
import ServicesHeader from '../Components/LandingPage/ServicesSection/ServicesHeader';
import OnlineLessonsInDetail from '../Components/LandingPage/ServicesSection/OnlineLessons/OnlineLessonsInDetail';
import CoachingHeader from '../Components/LandingPage/ServicesSection/Coaching/CoachingHeader';
import CoachingInDetail from '../Components/LandingPage/ServicesSection/Coaching/CoachingInDetail';
import ScrollForMore from '../Components/LandingPage/ScrollForMore';
import { useFormFactor } from '../Util/FormFactorContext';
import MyYoutubeHandler from '../Components/LandingPage/YoutubeSection/MyYoutubeHandler';

// Lower end of the page can be lazily loaded
// const CanadaImage = React.lazy(() => import('../Components/LandingPage/CanadaImage'));
// const OnlineLessons = React.lazy(() => import('../Components/LandingPage/ServicesSection/OnlineLessons/OnlineLessons'));
// const ServicesHeader = React.lazy(() => import('../Components/LandingPage/ServicesSection/ServicesHeader'));
// const OnlineLessonsInDetail = React.lazy(() => import('../Components/LandingPage/ServicesSection/OnlineLessons/OnlineLessonsInDetail'));

const NAV_BAR_OFFSET = 40;
export default function LandingPage() {
    const isSM = useFormFactor().SM;

    return (
        <div style={{ paddingBottom: NAV_BAR_OFFSET }}>
            <section id='intro-section'>
                <div className={styles.introSection}>
                    <KumataCoin />
                    <AboutKumata />
                </div>
                {!isSM && <ScrollForMore />}
            </section>
            <section id='profile-section'>
                <KumataProfile />
            </section>
            <section id='offered-services-section'>
                <ServicesHeader />
                <div id='online-lessons-section'>
                    <OnlineLessons />
                    <OnlineLessonsInDetail />
                </div>
                <div id='coaching-section'>
                    <CoachingHeader />
                    <CoachingInDetail />
                </div>
            </section>
            <section id='youtube-section'>
                <MyYoutubeHandler />
            </section>
            <section id='canada-image-section'>
                <CanadaImage />
            </section>
        </div>
    );
}