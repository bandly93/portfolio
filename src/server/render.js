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
		<html lang = 'en'>
      <head>
        <title>Portfolio</title>
				<meta name = 'viewport' content = 'width=device-width'>
				<meta name = 'description' content = 'portfolio Band Ly Web Developer'
				<link rel="icon" href="data:;base64,iVBORwOKGO=">
				<style>
					div{list-style-type:none;-webkit-padding-start:0}body,html{color:black;font-family:Arial,Helvetica,sans-serif;background-image:url('./images/background.jpg');margin:0;padding:0}a{color:black;text-decoration:none;padding:0 0.5vw}#hamburger-icon{content:url('./images/hamburger.svg');height:40px;margin-right:2vw}.navbar{background-color:white;display:inline-flex;text-align:center;width:100%}.navbar div{margin:auto 0}#logo{content:url('./images/logo.svg');background-repeat:no-repeat;width:80px}@media only screen and (min-width:813px){#navbar-secondary{display:none}#navbar-primary{justify-content:space-around}}@media only screen and (max-width:812px){#navbar-primary{display:none}#navbar-secondary{justify-content:space-between}.on{display:inline-grid}.off{display:none}}										
				</style>
				</head>
      <body>
        <div id="root">${html}</div>
				<script src= '/client-bundle.js' async></script>
				<script> window.__PRELOADED_STORE__ = ${serialize(preloadedState)} </script>
				
				<link href = '/client-bundle.css' rel='stylesheet'>
      </body>
    </html>
  `
}


