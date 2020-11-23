
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => res.status(200).json({
  status: 200,
  message: 'Visit Africa APIs'
}));

app.use('/', (req, res) => res.status(404).json({
  status: 404,
  message: 'You requested the wrong route'
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sever listening on port ${PORT}`));

export default app;
