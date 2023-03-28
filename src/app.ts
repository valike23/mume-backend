import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/',(req, res) => {
    res.send('Hello World!');
  });

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });