// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Fragment} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App = () => {
//   return (
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </Fragment>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;

'use strict';


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import  {createStackNavigator, createAppContainer} from 'react-navigation';
import SearchPage from './SearchPage'
//const instructions = Platform.select();

type Props = {};
// class SearchPage extends Component<Props>{

// 	static navigationOptions = {
// 		title: "property finder",
// 	};
// 	render(){
// 		return <Text style={styles.description}> Search for House to buy three</Text>;
// 		/*
// 		// return React.createElement(Text, {style : styles.description}, "Search for house to buy");*/
// 	}
// };

const RootStack = createStackNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  // Profile: {
  //   // `ProfileScreen` is a React component that will be the main content of the screen.
  //   screen: SearchPage,
  //   // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.

  //   // Optional: When deep linking or using react-navigation in a web app, this path is used:
  //   path: 'people/:name',
  //   // The action and route params are extracted from the path.

  //   // // Optional: Override the `navigationOptions` for the screen
  //   // navigationOptions: ({ navigation }) => ({
  //   //   title: `${navigation.state.params.name}'s Profile'`,
  //   // }),
  // },

  Home : {screen: SearchPage,},

  // ...MyOtherRoutes,
});

const App = createAppContainer(RootStack);
export default App;

const styles = StyleSheet.create({
	description :{
		fontSize : 18,
		textAlign : 'center',
		color : '#656565',
		marginTop : 65
	},

});


