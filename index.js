import cors from 'cors';
import express from 'express';
import rootRouter from './src/router/rootRouter.js';
const app = express();

app.use(express.json())

app.use(cors());

app.listen(8080);


app.use("/api", rootRouter);