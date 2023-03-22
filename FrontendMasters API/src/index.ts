import app from './server';
const PORT = 3003 || process.env.PORT;

app.listen(PORT, () => {
	console.log(`Hello world on http://localhost:${PORT}`);
});
