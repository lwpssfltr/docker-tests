const http = require('http');


const port = 8030;
const host = "localhost";

const requestListener = function(req, res) {
	if (req.headers['num'] == '0') {
		res.setHeader('num', "0");
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end();
		process.exit();
	}

//	console.log(req.headers['host']);
	let num = Math.trunc(Math.random() * 10);
	console.log(num);
	res.setHeader('num', num);
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end();
}

const app = http.createServer(requestListener).listen(port, host, () => {});
