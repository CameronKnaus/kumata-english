import React from 'react';
import styles from '../Styles/Pages/LandingPage.module.css';
import KumataCoin from '../Components/LandingPage/KumataCoin';
import AboutKumata from '../Components/LandingPage/AboutKumata';
import KumataProfile from '../Components/LandingPage/ProfileSection/KumataProfile';

// XS Defined here as 556px and smaller
const checkIfXS = () => window.innerWidth < 557;
const checkIfSM = () => window.innerWidth < 769;

export default function LandingPage() {
    const [isXS, setIsXS] = React.useState(checkIfXS());
    const [isSM, setIsSM] = React.useState(checkIfSM());


    // Window resize event listener
    React.useEffect(() => {
        // Handler for resize event
        const resizeHandler = () => {
            setIsXS(checkIfXS());
            setIsSM(checkIfSM());
        };

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, [isXS]);

    return (
        <>
            <section id='intro-section' className={styles.introSection}>
                <KumataCoin />
                <AboutKumata isXS={isXS} />
            </section>
            <section id='profile-section'>
                <KumataProfile isSM={isSM} />
            </section>
        </>
    );
}