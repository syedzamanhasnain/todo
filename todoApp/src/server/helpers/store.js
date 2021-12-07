import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from '../../client/components/views/Home/reducer';

export default () => {
	const store = createStore(
		combineReducers({
			homeReducer
			/* somemorereducers */
		}),
		{},
		applyMiddleware(thunk)
	);
	return store;
};
