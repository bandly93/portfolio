import serialize from 'serialize-javascript';
import configureStore from '../shared/redux/store.js';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import React from 'react';
import App from '../shared/App';

export const handleRender = (req,res) => {
	const store = configureStore(preloadedState);
	const html = renderToString(
		<Provider store = {store}>
			<App />
		</Provider>
	)
	const preloadedState = store.getState();
	res.send(renderFullPage(html,preloadedState));
}

export const renderFullPage = (html,preloadedState) => {
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

