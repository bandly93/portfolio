import express from 'express';
import path from 'path';
import expressStaticGzip from 'express-static-gzip';
import { handleRender } from './render.js';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({
	extended:true,
}))

app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(expressStaticGzip('dist',{enableBrotli:true}));

//routes

const emailRouter = require('./routes/emailRouter.js');

app.use('/email',emailRouter);

app.use(handleRender);

app.listen(port,()=>{
	console.log(`Server is listening on port: ${port}`);
});
