// import { useState, useEffect } from 'react';

// export function useMobile() {
//     const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

//     useEffect(() => {
//         function resizeListener() {
//             setIsMobile(window.innerWidth < 640);
//         }

//         window.addEventListener('resize', resizeListener);

//         return () => {
//             window.removeEventListener('resize', resizeListener);
//         }
//     }, []);

//     return isMobile;
// }
