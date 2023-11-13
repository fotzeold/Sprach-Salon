const express = require('express');
const router = express.Router();

const getCollectionData = async (req, res, collectionName) => {
	try {
		const db = req.db;
		const data = await db.collection(collectionName).find({}).toArray();
		res.json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'An error occurred' });
	}
};

router.get('/tests', async (req, res) => {
	await getCollectionData(req, res, 'tests');
});

router.get('/advantages', async (req, res) => {
	await getCollectionData(req, res, 'advantages');
});

router.get('/courses', async (req, res) => {
	await getCollectionData(req, res, 'courses');
});

module.exports = router;
