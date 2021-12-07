import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import appRoutes from '../../Routes';
import Footer from 'containers/Footer';
import Header from 'containers/Header';
import { changeloaderstatus } from './Website.action';

class WebsiteLayout extends React.Component {
	constructor(props) {
		super(props);
		this.unlisten;
	}

	componentDidMount() {}

	render() {
		return (
			<div className="site-wrapper">
				<Header />
				{renderRoutes(appRoutes[0].routes)}
				<Footer />
			</div>
		);
	}

	componentWillUnmount() {}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	changeloaderstatus: bindActionCreators(changeloaderstatus, dispatch)
});

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(WebsiteLayout)
);
