import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
import App from '../shared/App';
import React from 'react';
import serialize from 'serialize-javascript';
import path from 'path';
import { Provider } from 'react-redux';
import configureStore, {reducers} from '../client/redux/store.js';

const app = express();
const port = 3000;

app.use(express.static('dist'));
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
