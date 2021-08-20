const express = require('express')

const app = express()

const PORT = process.env.PORT

app.get('/', (req, res) => res.send('hello BOO!'))

app.listen(PORT, () => console.log('app listening at http://localhost:' + PORT))
