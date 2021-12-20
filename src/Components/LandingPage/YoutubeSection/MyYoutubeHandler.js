import React from 'react';
import styles from '../../../Styles/Components/LandingPage/YoutubeSection/MyYoutubeHandler.module.css';
import LANDING_TEXT from '../../../Content/LandingPage';
import { useFormFactor } from '../../../Util/FormFactorContext';
import { youtubeConstants } from '../../../Constants/SocialMediaConstants';
import YouTubeIcon from '@material-ui/icons/YouTube';

// Youtube video size
const LARGE_SCREEN = { width: '560', height: '315' };
const MED_SCREEN = { width: '420', height: '236' };
const SMALL_SCREEN = { width: '320', height: '180' };

export default function MyYoutubeHandler() {
    const TEXT = LANDING_TEXT.youtube;
    const formFactor = useFormFactor();
    let youtubeDimensions = LARGE_SCREEN;
    if(formFactor.MD) {
        youtubeDimensions = MED_SCREEN;
    }
    if(formFactor.XS) {
        youtubeDimensions = SMALL_SCREEN;
    }

    return (
        <div className={`average-container ${styles.componentWrapper}`}>
            <div className={styles.sectionContainer}>
                <div className={styles.descriptionBanner}>
                    {TEXT.title}
                </div>
                <div className={styles.flexContainer}>
                    <div className={styles.embeddedVideoContainer}>
                        <iframe allowFullScreen width={youtubeDimensions.width} height={youtubeDimensions.height}
                                src={youtubeConstants.showcaseVideo} title='YouTube video player'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        />
                    </div>
                    <div className={styles.youtubeDescription}>
                        <h3 className={styles.topicHeader}>
                            {TEXT.topics}
                        </h3>
                        <div className={styles.topicList}>
                            {
                                TEXT.videoTypeList.map((type, index) => (
                                    <div key={`video-type-${index}`} className={styles.topic}>
                                        {type}
                                    </div>
                                ))
                            }
                        </div>
                        <p className={styles.closingText}>
                            {TEXT.closingRemark}
                        </p>
                        <a href={youtubeConstants.channelFeatured}
                           style={{ textDecoration: 'none' }}
                           target='_blank'
                           rel='noreferrer'
                        >
                            <button className={styles.toYoutubeButton}>
                                <div className={styles.youtubeIcon}>
                                    <YouTubeIcon fontSize='inherit' />
                                </div>
                                {TEXT.toMyChannel}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}