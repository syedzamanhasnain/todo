import Website from './layout/Website/Website';
import Home, { loadHomeData } from 'views/Home';
import TodoApp from 'views/TodoApp';

const appRoutes = [
	{
		component: Website,
		routes: [
			{
				path: '/',
				exact: true,
				component: TodoApp
				// loadData: loadHomeData
			}
			/* Parameterized data */
			/* {
            path: '/route/:slug',
            exact: true,
            component: Home,
            loadDataWithMatch: loadHomeData
        }, */
		]
	}
];

export default appRoutes;
