import { VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { Hero } from '../components/Hero';

const Index: NextPage = () => {
	return (
		<>
			<Nav />
			<VStack w="full" h="full" py={[2, 4, 6, 8]} px={196} spacing={6} align="flex-start">
				<Hero />
			</VStack>
		</>
	);
};

export default Index;
