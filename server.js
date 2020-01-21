//imports
let express = require('express');

//instanciate server
let server = express();

//config route
server.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour sur mon serveur</h1>')
});

//lauch server
server.listen(8080, function() {
    console.log('server en écoute');
});