import { Text, Container, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { HomeButton } from '../components/HomeButton';

const Custom404: NextPage = () => {
	return (
		<>
			<Nav />
			<Container>
				<Flex justifyContent="center" alignItems="center" height="90vh" flexDirection="column">
					<Text fontWeight="semibold" fontSize="3xl" textAlign="center">
						That link doesn't exist. But don't worry, you can always head back to the home page.
					</Text>
					<HomeButton />
				</Flex>
			</Container>
		</>
	);
};

export default Custom404;
