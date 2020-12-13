const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();

// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: "POST"
// }))

app.use(express.json());
app.use(require('./routers/jobs'));

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Running on port ' + PORT);
})