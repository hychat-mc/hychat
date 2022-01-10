import { Text, Container, Flex, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';

const Index: NextPage = () => {
	return (
		<Container>
			<Flex h="100vh">
				<VStack>
					<Text fontSize="xl" fontWeight="bold">
						Welcome to Hychat.
					</Text>
					<Text fontSize="lg">This is a work in progress! Check back soon for more features!</Text>
				</VStack>
			</Flex>
		</Container>
	);
};

export default Index;
