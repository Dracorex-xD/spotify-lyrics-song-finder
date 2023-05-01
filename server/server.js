const express = require('express');
const app = express();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorHandler.js');
const cors = require('cors');
const port = process.env.PORT || 5003;

app.use(cors());
app.use(express.json());
app.use(errorHandler);


const date = new Date().toISOString();
app.listen(port, () => console.log(`Server started on port ${port} at: ${date}`.yellow.underline));
