import HTTP from 'utils/http.service';

export const getSomeData = () => async dispatch => {
	const res = await HTTP.get('/some-api-route');
	dispatch({
		type: 'GET_SOME_DATA',
		payload: res.data
	});
};
