const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Sample API endpoint
app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello from GitHub!' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});