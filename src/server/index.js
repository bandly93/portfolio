import express from 'express';
import { renderToString } from 'react-dom/server';
import App from '../shared/App';
import React from 'react';
import serialize from 'serialize-javascript';
import path from 'path';
import { Provider } from 'react-redux';
import configureStore from '../shared/redux/store.js';
import expressStaticGzip from 'express-static-gzip';

const app = express();
const port = 3000;

app.use(expressStaticGzip('dist',{enableBrotli:true}));
app.use(handleRender);

function handleRender(req,res) {
	const store = configureStore(preloadedState);
	const html = renderToString(
		<Provider store = {store}>
			<App />
		</Provider>
	)
	const preloadedState = store.getState();

	res.send(renderFullPage(html,preloadedState));
}

function renderFullPage(html,preloadedState){
	return `
		<!doctype html>
		<html>
      <head>
        <title>Portfolio</title>
				<link href = '/client-bundle.css' rel='stylesheet'>
			</head>
      <body>
        <div id="root">${html}</div>
				<script src= '/client-bundle.js'></script>
				<script> window.__PRELOADED_STORE__ = ${serialize(preloadedState)} </script>
      </body>
    </html>
  `
}

app.listen(port,()=>{
	console.log(`Server is listening on port: ${port}`);
});
