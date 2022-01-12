import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';

export const HomeButton = () => {
	return (
		<NextLink href="/" passHref>
			<Button mt="10" bg="green.300" fontWeight="bold" _hover={{ background: 'green.400' }}>
				Go Back
			</Button>
		</NextLink>
	);
};
