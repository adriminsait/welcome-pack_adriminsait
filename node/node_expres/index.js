const express = require('express');
require('./db.js');
const petRoutes = require('./routes/pet.routes');

const PORT = 3000;
const server = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello Upgrade Hub!');
});

router.get('/movies', (req, res) => {
    const movies = ['Harry Potter', 'Titanic', 'Back to the Future'];
    res.send(movies);
});

router.get('/movies/:name', (req, res) => {
    const name = req.params.name;
    console.log(name);
});

server.use('/', router);

server.use('/pets', petRoutes);

server.use('*', (req, res, next) => {
    const error = new Error('Route not found'); 
    error.status = 404;
    next(error); // Lanzamos la función next() con un error
});

server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
});

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});