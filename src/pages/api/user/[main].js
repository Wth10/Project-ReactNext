export default function user(_req, res) {
	const main = _req.query.main;

	res.status(200).json({
		id: `${main}`,
		nome: `Maria ${main}`,
		idade: `2${main}`,
		email: `maria${main}@yahoo.net`,
	});
}
