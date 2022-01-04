import { Meta } from '../components/Meta';
import { Main } from '../components/Main';

const Index = () => {
	return (
		<Main
			meta={
				<Meta
					title="HGB Dashboard"
					description="Easily create your own Hypixel Guild Chat Bot."
				/>
			}>
			<h1>Hello World</h1>
		</Main>
	);
};

export default Index;
