import { Text, Link, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { HomeButton } from '../components/HomeButton';

const Custom500: NextPage = () => {
	return (
		<>
			<Nav />
			<Flex justifyContent="center" alignItems="center" height="90vh" flexDirection="column">
				<Text fontWeight="semibold" fontSize="3xl" textAlign="center">
					Uh oh. Something went wrong on our end. Please{' '}
					<Link color="green.200" href="https://twitter.com/hychatmc" isExternal>
						check our Twitter
					</Link>{' '}
					for updates.
				</Text>
				<HomeButton />
			</Flex>
		</>
	);
};

export default Custom500;
