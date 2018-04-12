import express from 'express';
import path from 'path';
import expressStaticGzip from 'express-static-gzip';
import { handleRender } from './render.js';

const app = express();
const port = 3000;

app.use(expressStaticGzip('dist',{enableBrotli:true}));
app.use(handleRender);



app.listen(port,()=>{
	console.log(`Server is listening on port: ${port}`);
});
