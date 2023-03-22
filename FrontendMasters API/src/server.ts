import express from 'express';
import path from "path";

const app = express();
/**
 * app.[method]([route], [routeHandler])
 */

app.get('/', function (req, res) {
	// sending back an HTML that browser can see on the screen
	res.sendFile(path.resolve('./pages/index.html'));
});

// app.get('/', (req, res) => {
// 	console.log('Hello from Express');
// 	res
// 		.status(200)
// 		// .send('Sent: Hello from Express')
// 		.json({ message: 'Hello from Express to the Client' });
// });

app.use(express.static('static'));

export default app;
