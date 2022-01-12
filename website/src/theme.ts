import { extendTheme } from '@chakra-ui/react';

const fonts = { heading: 'Inter', body: 'Inter', base: 'Inter' };

const theme = extendTheme({
	colors: {
		gray: {
			200: '#4F4F4F',
			900: '#181818',
		},
		green: {
			200: '#00E18F', // Bright green (text)
			300: '#00C67E', // Button (darker)
			400: '#009861', // Button hover (darkest)
		},
		fonts,
		styles: {
			global: {
				body: {
					fontFamily: 'body',
					bg: 'gray.900',
					color: 'white',
				},
			},
		},
	},
});

export default theme;
