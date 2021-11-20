import fastify from 'fastify';

const server = fastify({ logger: true });

const port = process.env.PORT || 3000;

server
	.listen(port)
	.then(() => console.log(`Listening on port ${port}`))
	.catch(console.error);
