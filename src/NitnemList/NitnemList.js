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
let myNewHeaderBackgroundColor = 'pink';


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

export default class NitnemList extends Component {
	static navigationOptions = {
		title: 'ਲੜੀਵਾਰ',
		headerTitleStyle: {
			color:'red',
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
			            {key: 'ਜਪੁਜੀ ਸਾਹਿਬ'},
			            {key: 'ਜਾਪੁ ਸਾਹਿਬ'},
			            {key: 'ਤ੍ਵ ਪ੍ਰਸਾਦਿ ਸ੍ਵਯੇ'},
			            {key: 'ਚੌਪਈ ਸਾਹਿਬ'},
			            {key: 'ਅਨੰਦੁ ਸਾਹਿਬ'},
			            {key: 'ਰਹਰਾਸਿ ਸਾਹਿਬ'},
			            {key: 'ਸੋਹਿਲਾ ਸਾਹਿਬ'}
			          ]}
			          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
			        />
					<Button
						title="Next"
						onPress={() =>
							navigate('NitnemList', { name: 'Jane' })
						}
					></Button>
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

