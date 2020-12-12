const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: "POST"
}))

app.use(require('./routers/jobs'));

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Trabajando el el puerto ' + PORT);
})