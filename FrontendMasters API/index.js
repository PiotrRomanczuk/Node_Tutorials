const http = require('http');

const server = http.createServer((req, res) => {
	if (req.method === 'GET' && req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.write(JSON.stringify({ message: 'Hello from server' }));

		console.log('Hello from server');
		// console.log(res);
		// console.log(req);

		res.end();
		return;
	}

	res.writeHead(404, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify({ message: 'Nope.' }));
});

const PORT = 3001 || process.env.PORT;

server.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
