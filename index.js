const express = require('express');
const { join } = require('path');
const app = express();
const port = 83;
const public = join(__dirname, 'public');

app.use(express.static(public));
app.listen(port, () => console.log(`Server runing http://localhost:${port}/`));
