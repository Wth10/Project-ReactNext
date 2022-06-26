export default function handler(req, res) {
	if (req.method === 'GET') {
		handleGet(req, res);
	} else {
		res.status(405).send();
	}
}

function handleGet(_req, res) {
	res.status(200).json({
		id: 1,
		nome: 'Maria',
		idade: 25,
	});
}
