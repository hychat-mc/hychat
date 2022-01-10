import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<ColorModeProvider
				options={{
					useSystemColorMode: true,
				}}>
				<Component {...pageProps} />
			</ColorModeProvider>
		</ChakraProvider>
	);
}

export default MyApp;
