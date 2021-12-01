// import React from 'react';
//
// // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
// const mimeTypeMapper = {
//     jpg: 'image/jpeg',
//     png: 'image/png'
// };
//
// /**
//  * ----------- Mandatory Params -----------
//  * folderName - String: name of the folder or file path under src/Images/
//  * imageName - String: name of the image
//  * imageBaseType - String: filetype of the image ex: 'png' or 'jpg'
//  * ----------- Optional Params -----------
//  * optionalAlt - String: Alt text to display when Image can't load properly
//  * classes - String: list of css classes to use on the Image
//  */
//
// // Will attempt to render the image as a webp if the browser supports webp type images.  Else it will try the default image
// export default function Image({ folderName, imageName, imageBaseType, optionalAlt, classes = '' }) {
//     const fileType = imageBaseType.toLowerCase();
//     const mimeType = mimeTypeMapper[fileType];
//
//     if(!mimeType) {
//         return null;
//     }
//
//     return (
//         <picture>
//             <source type='image/webp'
//                     srcSet={require(`../../Images/webpDist/${imageName}.webp`)}
//                     className={classes}
//             />
//             <source type={mimeType}
//                     srcSet={require(`../../Images/${folderName}/${imageName}.${fileType}`)}
//                     className={classes}
//             />
//             <img src={require(`../../Images/${folderName}/${imageName}.${fileType}`)}
//                  alt={optionalAlt || ''}
//                  className={classes}
//             />
//         </picture>
//     );
// }