import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Signin from '../components/authentication/signin'


class App extends Component {
	render(){
		return(
				<View style={styles.container}>
					<Signin/>
				</View>
			)
	}
}


var styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	}
})




function mapStateToProps(state) {
 	
}

function mapDispatchToProps(dispatch) {
 
}

export default connect(null, null)(App)