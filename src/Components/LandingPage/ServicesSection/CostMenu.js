import React from 'react';
import styles from '../../../Styles/Components/LandingPage/ServicesSection/CostMenu.module.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LANDING_TEXT from '../../../Content/LandingPage';

export default function CostMenu({
    accentColor = '#333',
    bannerTitle,
    promotion,
    menuItems,
    saleDescription = '',
    emailSubjectLine = '',
    howToApply = () => { /* NOOP*/ },
    disclaimerList
}) {
    const TEXT = LANDING_TEXT.costMenuSharedText;

    // Styles
    const bannerStyles = { backgroundColor: accentColor };
    const menuStyles = { border: `1px solid ${accentColor}` };
    const initiationFeeContainerStyles = { color: accentColor };
    const accentedDividerStyle = { backgroundColor: accentColor };
    const howToApplyHeaderStyle = { color: accentColor };
    const buttonStyle = { backgroundColor: accentColor };

    const menuList = React.useMemo(() => {
        if(!menuItems) {
            return null;
        }

        return menuItems.map(menuItem => {
            const hasDiscount = menuItem.price !== menuItem.specialPrice;

            return (
                <div key={menuItem.title} className={styles.menuItem}>
                    <div className={styles.costLineContainer}>
                        <div className={styles.costDescriptionGroup}>
                            {menuItem.title}
                        </div>
                        <div className={styles.costGroup}>
                            <div className={`${hasDiscount ? styles.stalePrice : ''}`}>
                                {menuItem.price}
                            </div>
                            {
                                hasDiscount &&
                                <div className={styles.discountedPrice}>
                                    {menuItem.specialPrice}
                                </div>
                            }
                        </div>
                    </div>
                    {
                        menuItem.noteList && menuItem.noteList.map((note, index) => (
                            <div key={`${menuItem.title}-cost-note-${index}`} className={styles.saleDescription}>
                                {note}
                            </div>
                        ))
                    }
                </div>
            );
        });
    }, [menuItems]);

    return (
        <div className={styles.menuContainer}>
            <div className={styles.banner} style={bannerStyles}>
                {bannerTitle}
            </div>
            <div className={styles.menu} style={menuStyles}>
                {
                    saleDescription &&
                        <div className={styles.saleHeader}>
                            <FavoriteIcon />
                            <span className={styles.saleDescText}>
                                {saleDescription}
                            </span>
                        </div>
                }
                <div className={styles.initiationFeeContainer} style={initiationFeeContainerStyles}>
                    {promotion.title}
                    <span className={styles.initiationFee}>
                        {promotion.cost}
                    </span>
                    {'円'}
                    {promotion.costNote}
                </div>
                <div className={styles.accentedDividerBar} style={accentedDividerStyle} />
                {menuList}
                <div className={styles.howToApplyContainer}>
                    <h3 className={styles.howToApplyHeader} style={howToApplyHeaderStyle}>
                        {TEXT.howToApplyHeader}
                    </h3>
                    <p className={styles.emailAddress}>
                        {TEXT.email}
                    </p>
                    <p className={styles.howToApplyDescription}>
                        {howToApply(emailSubjectLine)}
                    </p>
                    <a href={`mailto:${TEXT.email}?subject=${emailSubjectLine}`}>
                        <button className={styles.emailButton} style={buttonStyle}>
                            {TEXT.emailLink}
                        </button>
                    </a>
                </div>
                {
                    disclaimerList && disclaimerList.map((disclaimer, index) => (
                        <div key={`${bannerTitle}-disclaimer-list-${index}`}
                             className={styles.disclaimerContainer}
                        >
                            <p className='reduced-body-text'>
                                {disclaimer}
                            </p>
                        </div>
                    ))

                }
            </div>
        </div>
    );
}