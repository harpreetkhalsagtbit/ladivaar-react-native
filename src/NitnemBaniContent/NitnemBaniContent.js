import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	ScrollView,
	StatusBar,
	Platform,
	FlatList
} from 'react-native';

var nitnemJson = require('../Assets/nitnem.json');

let myNewTextColor = 'forestgreen';

//your new header background color
let myNewHeaderBackgroundColor = '#33373B';


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		backgroundColor: '#33373B',
	},
	statusBar: {
		height: STATUSBAR_HEIGHT,
	},
	header: {
    	backgroundColor: 'blue',
	},
	parent_normal: {
		flex: 1,
		margin:10,
		flexWrap:"wrap",
		justifyContent:'center',
		flexDirection: 'row',
	},
	parent_tab: {
		flex: 1,
		margin:10,
		justifyContent:'center',
		flexWrap:"wrap",
		flexDirection: 'row',
	},
	parent_tab_bold: {
		flex: 1,
		margin:10,
		flexWrap:"wrap",
		justifyContent:'center',
		flexDirection: 'row',
	},
	text_normal: {
		fontSize:30,
	},
	text_tab: {
		color:'red',
		fontSize:30,
	},
	text_tab_bold: {
		color:'#FF8C00',
		fontSize:30,
		fontWeight:'bold',
	},
	highlight_text_normal: {
		borderRadius:10,
		backgroundColor:'black',
		color:'white',
		fontSize:30,
	},
	highlight_text_tab: {
		borderRadius:10,
		backgroundColor:'red',
		color:'white',
		fontSize:30,
	},
	highlight_text_tab_bold: {
		borderRadius:10,
		backgroundColor:'#FF8C00',
		color:'white',
		fontSize:30,
		fontWeight:'bold',
	}

});

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export default class NitnemBaniContent extends Component {
	static navigationOptions = {
		title: 'ਨਿਤਨੇਮ',
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

	constructor(props) {
	    super(props);
	    this.state = {touchedItemIndex: ''};
	    this.onPressAkhar = this.onPressAkhar.bind(this);
	}
	onPressAkhar(touchedItemIndex) {
		this.setState({
			'touchedItemIndex':touchedItemIndex
		})
	}
	render() {
		const { navigate } = this.props.navigation;
		var baniContent = nitnemJson[this.props.navigation.state.params.name]
		return (
			<ScrollView style={styles.content}>
				{baniContent.map((item, index) => {
					return BaniParagraph(item, index, this.state.touchedItemIndex, this.onPressAkhar)
				})}
			</ScrollView>
		);
	}
}

const Pankti = (pankti, style, highlightStyle, parentIndex, touchedItemIndex, onPressAkhar) => {
	var wordsArray = pankti.split(" ");
	return (wordsArray.map((akhar, index) => {
		if(touchedItemIndex === (parentIndex + "_" + index)) {
			return (
				<Text
					key={"akhar_" + parentIndex + "_" + index}
					style={[style, highlightStyle]}
					onPress={() => {
							onPressAkhar(parentIndex + "_" + index)
						}
					}

				>
					{akhar}
				</Text>
			)
		} else {
			return (
				<Text
					key={"akhar_" + parentIndex + "_" + index}
					style={style}
					onPress={() => {
							onPressAkhar(parentIndex + "_" + index)
						}
					}

				>
					{akhar}
				</Text>
			)
		}
	}))
}

const BaniParagraph = (item, index, touchedItemIndex, onPressAkhar) => {
	let Paragraph = <View key={index} style={styles.parent_normal}>{Pankti(item.baani_content, styles.text_normal, styles.highlight_text_normal, index, touchedItemIndex, onPressAkhar)}</View>;
	if(item.tab && item.bold) {
		Paragraph = <View key={index} style={styles.parent_tab_bold}>{Pankti(item.baani_content, styles.text_tab_bold, styles.highlight_text_tab_bold, index, touchedItemIndex, onPressAkhar)}</View>;
	} else if(item.tab) {
		Paragraph = <View key={index} style={styles.parent_tab}>{Pankti(item.baani_content, styles.text_tab, styles.highlight_text_tab, index, touchedItemIndex, onPressAkhar)}</View>;
	}
	return Paragraph
}

const MyStatusBar = ({backgroundColor, ...props}) => (
	<View style={[styles.statusBar, { backgroundColor }]}>
		<StatusBar backgroundColor={backgroundColor} {...props} />
	</View>
);

