import { Text, Link, Img } from '@chakra-ui/react';
import { CTAButton } from '../components/CTAButton';

export const Hero = () => {
	return (
		<>
			<Text fontSize="5xl" fontWeight="black">
				Expand your community with a <Text color="green.200">guild chat bridge.</Text>
			</Text>
			<Text fontSize="2xl" fontWeight="light" color="white">
				Stay tuned for more information.
			</Text>
			<Link href="https://twitter.com/hychatmc" isExternal>
				<CTAButton />
			</Link>
			<Img src="images/discord.png" />
		</>
	);
};
