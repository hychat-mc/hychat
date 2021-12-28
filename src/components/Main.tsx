import { ReactNode } from 'react';
import { config } from '../util/config';

interface IMainProps {
	meta: ReactNode;
	children: ReactNode;
}

const Main = (props: IMainProps) => (
	<div className="antialiased w-full px-1 bg-white dark:bg-black">
		{props.meta}

		<div className="py-5 text-xl content">{props.children}</div>

		<div className="text-center py-8 text-sm dark:text-white">
			{config.title} licensed under the MIT license.
		</div>
	</div>
);

export { Main };
