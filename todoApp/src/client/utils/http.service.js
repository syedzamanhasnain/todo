import axios from 'axios';
import CONFIG from './config';

const HTTP = axios.create({
	baseURL: CONFIG.API.url
});

HTTP.interceptors.request.use(function (config) {
	config.url += '?_format=json';
	return config;
});

export default HTTP;
