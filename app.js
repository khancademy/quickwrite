const { exec } = require('child_process');
exec('npm install express', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error installing Express: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`npm error: ${stderr}`);
    return;
  }
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
