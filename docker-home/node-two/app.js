const http = require('http');


const port = 8031;
const host = "localhost";
function ddos() {
	http.get("http://localhost:8030", res => {
		num = res.headers['num'];
		console.log(res.headers['num']);
		if (num != 0) {
			ddos();
		}
	});
}

ddos();
