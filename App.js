import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';

import Main from './src/Main/Main'
import NitnemList from './src/NitnemList/NitnemList'
import TatkraList from './src/TatkraList/TatkraList'

export default App = StackNavigator({
	Main: {
		screen: Main
	},
	NitnemList: {
		screen: NitnemList
	},
	TatkraList: {
		screen: TatkraList
	}
}, {
	headerMode:'screen'
}, {
	transitionConfig: () => ({
    	transitionSpec: {
			duration: 500,
			easing: Easing.out(Easing.poly(4)),
			timing: Animated.timing,
		}
	})
});
