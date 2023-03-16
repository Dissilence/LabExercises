const express = require('express')
const friendRoute = require('./routes/friends');
const calculatorRoute = require('./routes/calculatorRoute');
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');


const app = express()
const port = 3000

app.use(express.json());

app.use('/', express.static('public'))
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
    );

app.use(express.json());

app.use('/friends', friendRoute);
app.use('/calculator',calculatorRoute)

app.listen(port, () => {
    console.log(`Example applistening at http://localhost:${port}`)
})
