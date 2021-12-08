import React from 'react';
import { useController } from 'react-scroll-parallax';


/*
    Use this component wrapper for parallax items that are broken on initial load (not moving).
    The reason for the issue is that height elements on the page can shift on loading which causes <Parallax />
    components to no longer be able to determine when parallax elements come into view.
 */
export default function ParallaxCache({ children }) {
    const { parallaxController } = useController();

    React.useLayoutEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener('load', handler);
        return () => window.removeEventListener('load', handler);
    }, [parallaxController]);

    return children;
}