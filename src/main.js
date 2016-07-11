import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore()
import Signin from './components/authentication/signin'
import App from './containers/App';

module.exports = React.createClass({
	render:function(){
		return(
			<Provider store={store}>
				<App/>
			</Provider>
			)
	}
});

