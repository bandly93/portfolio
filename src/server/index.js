import express from 'express';
import path from 'path';
import expressStaticGzip from 'express-static-gzip';
import { handleRender } from './render.js';
import morgan from 'morgan';

const app = express();
const port = 3000;


app.use(express.static('dist'));
app.use(morgan('dev'));
//app.use(expressStaticGzip('dist',{enableBrotli:true}));
app.use(handleRender);

app.listen(port,()=>{
	console.log(`Server is listening on port: ${port}`);
});
