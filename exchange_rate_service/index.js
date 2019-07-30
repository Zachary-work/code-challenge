import express from 'express';
import cors from 'cors';

let app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send("Setup");
});

let server = app.listen(3000, () => {
    console.log('App running');
});