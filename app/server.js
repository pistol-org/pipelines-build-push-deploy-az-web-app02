const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello DeadSquirrel-02 it friggin worked...!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
