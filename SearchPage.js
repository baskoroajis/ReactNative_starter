'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Button, ActivityIndicator, Image} from 'react-native';

type Props = {};


export default class SearchPage extends Component<Props>{
	static navigationOptions = {
		title : "Property finder"
	};

	constructor(props){
		super(props);
		this.state = {
			searchString : 'london',
			isLoading : false
		};
	}

	_onSearchTextChanged = (event) =>{
		 console.log('_onSearchTextChanged');
		this.state({searchString: event.nativeEvent.text});
		 console.log('Current: '+this.state.searchString+', Next: '+event.nativeEvent.text);
	}

	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.description}>Search for house to buy</Text>
				<Text style={styles.description}>Search by place name or postalcode</Text>

				<View style={styles.flowRight}>
					 <TextInput
					    underlineColorAndroid={'transparent'}
					    style={styles.searchInput}
					    value={this.state.searchString}
					    placeholder='Search via name or postcode'/>
					  <Button
					    onPress={() => {}}
					    color='#48BBEC'
					    title='Go'
					  />
				</View>

				<Image source={require('./Resources/house.png')} style={styles.image}/>
			</View>
			);
	}
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
  	flexDirection: 'row',
  	alignItems: 'center',
  	alignSelf: 'stretch',
  },
  searchInput: {
  	height : 36,
  	padding: 4,
  	marginRight: 5,
  	flexGrow: 1,
  	fontSize:18,
  	borderWidth: 1,
  	borderColor: '#48BBEC',
  	color: '#48BBEC'
  },
  image: {
  	width: 217,
  	height:138,
  },
})