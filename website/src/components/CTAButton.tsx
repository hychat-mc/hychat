import { Button } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';

export const CTAButton = () => {
	return (
		<Button leftIcon={<FaTwitter />} bg="green.300" fontWeight="bold" _hover={{ background: 'green.400' }}>
			Follow us on Twitter
		</Button>
	);
};
