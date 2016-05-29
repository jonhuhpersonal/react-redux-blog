import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index'

//mapping of url to components

export default (

	//App won't know where to render Greeting unless you specify.
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
	</Route>
);
