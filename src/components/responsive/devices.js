import React, { useEffect, useState } from 'react';
import useViewPort from './useViewPort';



export const useDevice = () => {
	const { width, height } = useViewPort();
	const [devices, setDevices] = useState({ mobile: false, ipad: false, desktop: false });

	useEffect(() => {
		if (width < height) {
			if (width < 600) {
				//console.log('Portrait:device: ' + 'Mobile');
				setDevices({ mobile: true, ipad: false, desktop: false });
			} else if (width > 600 && width < 960) {
				//console.log('Portrait:device: ' + 'ipad');
				setDevices({ mobile: false, ipad: true, desktop: false });
			} else if (width > 960) {
				//console.log('Portrait:device: ' + 'desktop');
				if (height > 1024) setDevices({ mobile: false, ipad: true, desktop: false });
				else setDevices({ mobile: false, ipad: false, desktop: true });
			}
		} else {
			if (width < 600) {
				//console.log('Landscape:device: ' + 'Mobile');
				setDevices({ mobile: true, ipad: false, desktop: false });
			} else if (width > 600 && width < 1210) {
				//console.log('Landscape:device: ' + 'ipad');
				if (height < 600) {
					setDevices({ mobile: true, ipad: false, desktop: false });
				} else {
					setDevices({ mobile: false, ipad: true, desktop: false });
				}
			} else if (width > 960) {
				//console.log('Landscape:device: ' + 'desktop');
				setDevices({ mobile: false, ipad: false, desktop: true });
			}
		}
	}, [width, height]);
	return devices;
};
