import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import appRoutes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.unlisten;
	}

	componentDidMount() {
		if (IS_CLIENT) {
			/* Handle something on browser only */
		}
	}

	render() {
		return <BrowserRouter>{renderRoutes(appRoutes)}</BrowserRouter>;
	}
}

export default App;
