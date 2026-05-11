import { FC } from 'react';

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
const mimeTypeMapper = {
  jpg: 'image/jpeg',
  png: 'image/png',
} as const;

type MimeType = keyof typeof mimeTypeMapper;

interface ImageProps {
  webpImage: string;
  regularImage: string;
  imageBaseType: MimeType;
  optionalAlt?: string;
  classes?: string;
  label?: string;
  onLoad?: () => void;
}

// Will attempt to render the image as a webp if the browser supports webp type images.  Else it will try the default image
const Image: FC<ImageProps> = ({
  webpImage,
  regularImage,
  imageBaseType,
  optionalAlt,
  classes = '',
  label,
  onLoad = () => {
    /* NOOP*/
  },
}) => {
  const mimeType = mimeTypeMapper[imageBaseType];

  if (!mimeType) {
    return null;
  }

  return (
    <div role="img" aria-label={label}>
      <picture>
        <source type="image/webp" srcSet={webpImage} />
        <source type={mimeType} srcSet={regularImage} />
        <img
          src={regularImage}
          alt={optionalAlt || ''}
          className={classes}
          onLoad={onLoad}
        />
      </picture>
    </div>
  );
};

export default Image;
