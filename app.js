const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
app.use(express.json());
app.post('/store', (req, res) => {
  const variables = req.body;
  fs.appendFile('log.txt', JSON.stringify(variables) + '\n', (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error storing variables');
    } else {
      res.send('Variables stored successfully');
    }
  });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
