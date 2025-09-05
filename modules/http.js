const http = require('http');

const PORT = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Home Page</h1>');
    }

    else if (req.url === '/user') {
        const user = [
            {name: 'Alice',
                age: 30},
            {name: 'Bob',
                age: 25},
            {name: 'Charlie',
                age: 35}
        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(user));
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
