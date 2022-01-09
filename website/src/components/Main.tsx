import { Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const Main = (props: ReactNode) => (
	<Stack spacing="1.5rem" width="100%" maxWidth="48rem" mt="-45vh" pt="8rem" px="1rem" {...props} />
);
