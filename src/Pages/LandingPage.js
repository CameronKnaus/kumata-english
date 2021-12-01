import React from 'react';
import styles from '../Styles/Pages/LandingPage.module.css';
import KumataCoin from '../Components/LandingPage/KumataCoin';
import AboutKumata from '../Components/LandingPage/AboutKumata';

// XS Defined here as 556px and smaller
const checkIfXS = () => window.innerWidth < 557;

export default function LandingPage() {
    const [isXS, setIsXS] = React.useState(checkIfXS());

    // Window resize event listener
    React.useEffect(() => {
        // Handler for resize event
        const resizeHandler = () => setIsXS(checkIfXS());

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, [isXS]);

    return (
        <>
            <div className={styles.introSection}>
                <KumataCoin />
                <AboutKumata isXS={isXS} />
            </div>
            <div />
        </>
    );
}