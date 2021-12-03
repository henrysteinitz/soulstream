export default (path, body, cb) => fetch(path, {
	method: 'POST',
	headers: {
		'content-type': 'application/json'
	},
	body: JSON.stringify(body)
}).then((res) => {
	res.json().then(cb)
})