import serialize from 'serialize-javascript';
import configureStore from '../shared/redux/store.js';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter as Router} from 'react-router';
import App from '../shared/App';

export const handleRender = (req,res) => {
	const store = configureStore();
	let context = {};
	const html = renderToString(
		<Provider store = {store}>
			<Router context = {context} location = {req.url}>
				<App />
			</Router>
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
				<meta name = 'viewport' content = 'width=device-width'>
				<link rel="icon" href="data:;base64,iVBORwOKGO=">
				<link href = '/client-bundle.css' rel='stylesheet'>
			</head>
      <body>
        <div id="root">${html}</div>
				<script src= '/client-bundle.js' async = true></script>
				<script> window.__PRELOADED_STORE__ = ${serialize(preloadedState)} </script>
      </body>
    </html>
  `
}

