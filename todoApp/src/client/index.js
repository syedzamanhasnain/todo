import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeClient from './store';
import App from './app';

ReactDOM.hydrate(
	<Provider store={storeClient()}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
