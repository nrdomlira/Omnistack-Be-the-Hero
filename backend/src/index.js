const express = require('express');
const cors = require('cors');
const Router = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(Router);


app.listen(3333);