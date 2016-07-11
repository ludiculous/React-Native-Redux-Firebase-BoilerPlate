import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
var Header = require('../header');
var Button = require('../common/button');

module.exports = React.createClass({


	getInitialState:function(){
		return {
			loaded:true,
			username:'',
			password:''
		};
	},
	onPress:function(){
		console.log(this.state.username +" "+this.state.password);
		
	},
	render:function(){
		return(
			<View>
				<Header loaded={this.state.loaded}/>
				<Text>Sign In</Text>
				<Text style={styles.label}>Email:</Text>
				<TextInput 
					style={styles.input} 
					value={this.state.username} 
					onChangeText={(text)=>this.setState({username:text})}/>
				<Text style={styles.label}>Password:</Text>
				<TextInput secureTextEntry={true} 
					value={this.state.password} 
					style={styles.input} 
					onChangeText={(text) => this.setState({password:text})}/>
				<Button text={'Sign In'} onPress={this.onPress}/>
			</View>
			);
	}
});

var styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	input:{
		padding:4,
		height:40,
		borderColor:'gray',
		borderWidth:1,
		borderRadius:5,
		margin:5,
		width:200,
		alignSelf:'center'

	},
	label:{
		fontSize:18
	}
});