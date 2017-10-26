import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	StatusBar,
	Platform,
	FlatList
} from 'react-native';

let myNewTextColor = 'forestgreen';

//your new header background color
let myNewHeaderBackgroundColor = '#33373B';


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	item: {
		padding: 10,
		fontSize: 25,
		fontWeight:'400',
		height: 60,
		color:'white',
		borderBottomWidth:1
	},
	statusBar: {
		height: STATUSBAR_HEIGHT,
	},
	header: {
    	backgroundColor: 'blue',
	},
	appBar: {
		backgroundColor: 'green',
		height: APPBAR_HEIGHT,
		alignItems:'center'
	},
	title: {
		fontSize:40,
		fontWeight: 'bold',
	},
	content: {
		flex: 1,
		backgroundColor: '#33373B',
	},
});

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export default class TatkraList extends Component {
	static navigationOptions = {
		title: 'ਤਤਕਰਾ',
		headerTitleStyle: {
			color:'white',
			flex:1,
			fontSize:40,
			paddingTop:25,
			alignSelf:'center'
		},
		headerStyle: {
			height:APPBAR_HEIGHT + 20,
			backgroundColor: myNewHeaderBackgroundColor
		}
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<MyStatusBar backgroundColor="green" barStyle="light-content" />
				<View style={styles.content}>
					<FlatList
			          data={[
							{"key":"ਜਪੁ"},
							{"key":"ਸੋਦਰੁ"},
							{"key":"ਸੋਪੁਰਖੁ"},
							{"key":"ਸੋਹਿਲਾ"},
							{"key":"ਸਿਰੀਰਾਗੁ"},
							{"key":"ਰਾਗੁਮਾਝ"},
							{"key":"ਰਾਗੁਗਉੜੀ"},
							{"key":"ਰਾਗੁਆਸਾ"},
							{"key":"ਰਾਗੁਗੂਜਰੀ"},
							{"key":"ਰਾਗੁਦੇਵਗੰਧਾਰੀ"},
							{"key":"ਰਾਗੁਬਿਹਾਗੜਾ"},
							{"key":"ਰਾਗੁਵਡਹੰਸੁ"},
							{"key":"ਰਾਗੁਸੋਰਠਿ"},
							{"key":"ਰਾਗੁਧਨਾਸਰੀ"},
							{"key":"ਰਾਗੁਜੈਤਸਰੀ"},
							{"key":"ਰਾਗੁਟੋਡੀ"},
							{"key":"ਰਾਗੁਬੈਰਾੜੀ"},
							{"key":"ਰਾਗੁਤਿਲੰਗ"},
							{"key":"ਰਾਗੁਸੂਹੀ"},
							{"key":"ਰਾਗੁਬਿਲਾਵਲੁ"},
							{"key":"ਰਾਗੁਗੋਂਡ"},
							{"key":"ਰਾਗੁਰਾਮਕਲੀ"},
							{"key":"ਰਾਗੁਨਟਨਾਰਾਇਨ"},
							{"key":"ਰਾਗੁਮਾਲੀਗਉੜਾ"},
							{"key":"ਰਾਗੁਮਾਰੂ"},
							{"key":"ਰਾਗੁਤੁਖਾਰੀ"},
							{"key":"ਰਾਗੁਕੇਦਾਰਾ"},
							{"key":"ਰਾਗੁਭੈਰਉ"},
							{"key":"ਰਾਗੁਬਸੰਤੁ"},
							{"key":"ਰਾਗੁਸਾਰਗ"},
							{"key":"ਰਾਗੁਮਲਾਰ"},
							{"key":"ਰਾਗੁਕਾਨੜਾ"},
							{"key":"ਰਾਗੁਕਲਿਆਨ"},
							{"key":"ਰਾਗੁਪ੍ਰਭਾਤੀ"},
							{"key":"ਰਾਗੁਜੈਜਾਵੰਤੀ"},
							{"key":"ਸਲੋਕਸਹਸਕ੍ਰਿਤੀਮਹਲਾ੧"},
							{"key":"ਸਲੋਕਸਹਸਕ੍ਰਿਤੀਮਹਲਾ੫"},
							{"key":"ਮਹਲਾ੫ਗਾਥਾ"},
							{"key":"ਫੁਨਹੇਮਹਲਾ੫"},
							{"key":"ਚਉਬੋਲੇਮਹਲਾ੫"},
							{"key":"ਸਲੋਕਭਗਤਕਬੀਰਜੀਉਕੇ"},
							{"key":"ਸਲੋਕਸੇਖਫਰੀਦਕੇ"},
							{"key":"ਸਵਯੇਸ੍ਰੀਮੁਖਬਾਕਮਹਲਾ੫"},
							{"key":"ਸਲੋਕਵਾਰਾਂਤੇਵਧੀਕ"},
							{"key":"ਸਲੋਕਮਹਲਾ੯"},
							{"key":"ਮੁੰਦਾਵਣੀਮਹਲਾ੫"},
							{"key":"ਰਾਗਮਾਲਾ"}
			          ]}
			          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
			        />
				</View>
			</View>
		);
	}
}


const MyStatusBar = ({backgroundColor, ...props}) => (
	<View style={[styles.statusBar, { backgroundColor }]}>
		<StatusBar backgroundColor={backgroundColor} {...props} />
	</View>
);

