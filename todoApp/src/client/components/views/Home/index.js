import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSomeData } from './action';
import './style.scss';

class Home extends React.Component {
	constructor(props) {
		super(props);
		/* 
            //Only use if you want to render the component with SSR
            loadHomeData();
        */
	}

	componentDidMount() {}

	render() {
		return (
			<div className="home-wrapper">
				<div className="logo-img">
					<img src="/images/react.svg" role="img" alt="logo" />
				</div>
				<div className="content">
					<h1>Welcome to SG React Boilerplate</h1>
					<p>
						For a guide and recipes on how to configure this project,
						<br />
						check out <strong>README.md</strong> file.
					</p>
					<h3>Installed Package</h3>
					<ul className="list-packages">
						<li>react-router-dom</li>
						<li>redux</li>
						<li>redux-thunk</li>
						<li>axios</li>
						<li>bootstrap</li>
						<li>many more</li>
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	someData: state.homeReducer.someData
});

const mapDispatchToProps = dispatch => ({
	getSomeData: bindActionCreators(getSomeData, dispatch)
});

function loadHomeData({ store }) {
	return Promise.all([
		store.dispatch(getSomeData()) /* store.dispatch(getWhatWeDoList()) */
	]);
}

export { loadHomeData };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
