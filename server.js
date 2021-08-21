const express = require('express')
const mysql = require('./config')

mysql.connect(err => {
  if (err) throw err
  console.log('mysql connected')
})

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) =>
  mysql.query('SELECT * FROM tasks', (err, item) =>
    err ? res.status(500).json(err) : res.status(200).json(item)
  )
)

app.listen(PORT, () => console.log('app listening at http://localhost:' + PORT))
