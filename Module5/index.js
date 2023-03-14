const express = require('express')
const testRoute = require('./routes/myTestRoutes');
const app = express()
const port = 3000

app.use('/', express.static('public'))

app.use('/myTest', testRoute);

app.listen(port, () => {
    console.log(`Example applistening at http://localhost:${port}`)
})
