import express from 'express'

const app = express();

app.get('/', (req, res) => {
  res.json({ er: 'okey!' })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`now listening ${PORT}`))
