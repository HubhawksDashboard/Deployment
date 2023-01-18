import React from 'react';

const useViewport = () => {
	const [width, setWidth] = React.useState(window.innerWidth);
	// Add a second state variable "height" and default it to the current window height
	const [height, setHeight] = React.useState(window.innerHeight);
	
	const handleResize = () => {
		setWidth(prevWidth => {
			if (prevWidth !== window.innerWidth) {
				setHeight(window.innerHeight)
				return window.innerWidth;
			}
			else {
				return prevWidth;
			}
		});
	}
	React.useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', () => { });
	}, []);

	// Return both the height and width
	return { width, height };
};

export default useViewport;
