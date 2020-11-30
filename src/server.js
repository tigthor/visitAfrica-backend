import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import routes from './routes';
import ResponseService from './services/response.service';

config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes);

app.get('/', (req, res) => {
	ResponseService.setSuccess(200, 'Welcome to Visit Africa APIs');
	return ResponseService.send(res);
});

app.use('/', (req, res) => {
	ResponseService.setError(404, 'Sorry you have accessed a wrong route');
	return ResponseService.send(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sever listening on port ${PORT}`));

export default app;
