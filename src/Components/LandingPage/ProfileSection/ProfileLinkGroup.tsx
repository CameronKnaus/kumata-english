import { Link } from 'react-router-dom';
import styles from '../../../Styles/Components/LandingPage/ProfileSection/ProfileLinkGroup.module.css';
import LANDING_TEXT from '../../../Content/LandingPage';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SmileIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import {
  youtubeConstants,
  instagramConstants,
} from '../../../Constants/SocialMediaConstants';
import { PAGE_ROUTES } from '../../../Constants/RouteConstants';

interface ProfileLinkGroupProps {
  showHeader?: boolean;
}

export default function ProfileLinkGroup({
  showHeader,
}: ProfileLinkGroupProps) {
  return (
    <div className={styles.componentContainer}>
      {showHeader && (
        <h3 className={styles.headerText}>{LANDING_TEXT.linksAboutMe}</h3>
      )}
      <div className={styles.groupContainer}>
        <div className={styles.linkContainer}>
          <SmileIcon
            fontSize="inherit"
            className={styles.icon}
            style={{ color: 'var(--theme-brown)' }}
          />
          <Link to={PAGE_ROUTES.aboutMe} className={styles.link}>
            <p className={styles.linkText}>{LANDING_TEXT.moreAboutMe + ' >'}</p>
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <InstagramIcon
            fontSize="inherit"
            className={styles.icon}
            style={{ color: 'var(--instagram-violet)' }}
          />
          <a
            href={instagramConstants.profilePage}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <p className={styles.linkText}>{LANDING_TEXT.myInstagram + ' >'}</p>
          </a>
        </div>
        <div className={styles.linkContainer}>
          <YouTubeIcon
            fontSize="inherit"
            className={styles.icon}
            style={{ color: 'var(--youtube-red)' }}
          />
          <a
            href={youtubeConstants.channelFeatured}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            <p className={styles.linkText}>{LANDING_TEXT.myYoutube + ' >'}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
