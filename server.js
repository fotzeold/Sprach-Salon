
const express = require('express');
const bodyParser = require('body-parser');
const client = require('./app/config/db');
const routes = require('./app/routes/routes');

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.use(async (req, res, next) => {
	try {
		req.db = client.db('sprach-salon');
		next();
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'An error occurred' });
	}
});

app.use('/api', routes);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});