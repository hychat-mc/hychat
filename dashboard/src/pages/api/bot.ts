import Cors from 'cors';
import initMiddleware from '../../util/initMiddleware';

import type { NextApiRequest, NextApiResponse } from 'next';
interface ResData {
	data: string;
}

const cors = initMiddleware(
	Cors({
		// Only allow requests with GET method
		methods: ['GET'],
	}),
);

export default async (req: NextApiRequest, res: NextApiResponse<ResData>) => {
	await cors(req, res);
	if (req.method !== 'GET') {
		res.status(405).end('405: Method Not Allowed');
		return;
	}
	try {
		res.status(200).json({ data: 'Success' });
	} catch (error) {
		res.status(500).json({ data: 'An unknown server error occurred' });
	}
};
