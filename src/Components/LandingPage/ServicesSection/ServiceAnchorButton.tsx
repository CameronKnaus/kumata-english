import styles from '../../../Styles/Components/LandingPage/ServicesSection/ServiceAnchorButton.module.css';
import SchoolIcon from '@mui/icons-material/School';
import SportsIcon from '@mui/icons-material/Sports';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useFormFactor } from '../../../Util/useFormFactor';

const iconMapper = {
  lessons: <SchoolIcon fontSize="inherit" />,
  coaching: <SportsIcon fontSize="inherit" />,
  youtube: <YouTubeIcon fontSize="inherit" />,
  instagram: <InstagramIcon fontSize="inherit" />,
};

type IconType = keyof typeof iconMapper;

type ServiceAnchorButtonOptions = {
  backgroundColor?: string;
  text: string;
  icon: IconType;
  slimMode?: boolean;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function ServiceAnchorButton({
  backgroundColor,
  text,
  icon,
  slimMode = false,
  clickHandler,
}: ServiceAnchorButtonOptions) {
  const isSM = useFormFactor().SM;

  const showText = !isSM || (!slimMode && isSM);
  const iconStyling = slimMode && isSM ? styles.slimIcons : styles.icon;

  return (
    <button
      className={`${slimMode ? styles.slimButtonStyle : styles.buttonStyle}`}
      style={{ backgroundColor }}
      onClick={event => {
        clickHandler(event);
      }}
    >
      <div className={iconStyling}>{iconMapper[icon] || ''}</div>
      {showText && <div className={styles.text}>{text}</div>}
    </button>
  );
}
