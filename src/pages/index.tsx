import { Meta } from '../components/Meta';
import { Main } from '../components/Main';

const Index = () => {
	return (
		<Main
			meta={
				<Meta
					title="Mineflayer Bot Dashboard"
					description="A dashboard that allows you to easily manage your Mineflayer bot"
				/>
			}>
			<h1>Hello World</h1>
		</Main>
	);
};

export default Index;
