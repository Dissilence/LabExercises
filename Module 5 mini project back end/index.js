const express = require('express')
const animeRoutes = require('./routes/animeRoutes');
const reccomendRoutes = require('./routes/reccomendRoutes');
const ratingRoutes = require('./routes/ratingRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express()
const port = 3000

app.use('/', express.static('public'))
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
    );
app.use(express.json());

app.use('/anime', animeRoutes);
app.use('/reccomend', reccomendRoutes);
app.use('/rating', ratingRoutes);

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })