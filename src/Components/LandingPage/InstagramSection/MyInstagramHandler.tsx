import styles from '../../../Styles/Components/LandingPage/InstagramSection/MyInstagramHandler.module.css';
import LANDING_TEXT from '../../../Content/LandingPage';
import { instagramConstants } from '../../../Constants/SocialMediaConstants';
import InstagramIcon from '@mui/icons-material/Instagram';
import regularImageOne from '../../../Images/Characters/DetailInstaKumata.jpg';
import webpImageOne from '../../../Images/webpDist/DetailInstaKumata.webp';
import regularImageTwo from '../../../Images/Characters/MoonInstaKumata.jpg';
import webpImageTwo from '../../../Images/webpDist/MoonInstaKumata.webp';
import regularImageThree from '../../../Images/Characters/ParticularInstaKumata.jpg';
import webpImageThree from '../../../Images/webpDist/ParticularInstaKumata.webp';
import Image from '../../UIElements/Image';
import { useFormFactor } from '../../../Util/useFormFactor';

export default function MyInstagramHandler() {
  const TEXT = LANDING_TEXT.instagram;
  const isSM = useFormFactor().SM;

  function renderImageGroup() {
    return (
      <div className={styles.instagramPostsSection}>
        <div className={styles.postsHolster}>
          <Image
            regularImage={regularImageOne}
            webpImage={webpImageOne}
            classes={styles.imageOne}
            imageBaseType="jpg"
          />
          <Image
            regularImage={regularImageTwo}
            webpImage={webpImageTwo}
            classes={styles.imageTwo}
            imageBaseType="jpg"
          />
          <Image
            regularImage={regularImageThree}
            webpImage={webpImageThree}
            classes={styles.imageThree}
            imageBaseType="jpg"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`average-container ${styles.componentWrapper}`}>
      <div className={styles.sectionContainer}>
        <div className={styles.descriptionBanner}>{TEXT.title}</div>
        <div className={styles.flexContainer}>
          {isSM && renderImageGroup()}
          <div className={styles.descriptionSection}>
            <h3 className={styles.header}>{TEXT.header}</h3>
            <p className={styles.instaDescription}>{TEXT.instaDescription}</p>
            <a
              href={instagramConstants.profilePage}
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.toInstagramButton}>
                <div className={styles.instagramIcon}>
                  <InstagramIcon fontSize="inherit" />
                </div>
                {TEXT.toMyProfile}
              </button>
            </a>
          </div>
          {!isSM && renderImageGroup()}
        </div>
      </div>
    </div>
  );
}
