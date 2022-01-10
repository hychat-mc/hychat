import { Link as ChakraLink, Text, Code, Container, Flex, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';

const Index: NextPage = () => {
	return (
		<Container>
			<Flex h="100vh">
				<VStack>
					<Text fontSize="xl" fontWeight="bold">
						Hello Next.js
					</Text>
					<Text fontSize="lg">
						This is a simple example of a Next.js page. You can find the source code of this page at{' '}
						<ChakraLink href="https://github.com">
							<Code>https://github.com</Code> :)
						</ChakraLink>
					</Text>
				</VStack>
			</Flex>
		</Container>
	);
};

export default Index;
