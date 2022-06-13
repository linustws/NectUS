import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    Pressable
} from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/Styles';
import { COLOURS } from '../styles/Colours';

const StartScreen = () => {
    return (
        <View style={globalStyles.container}>
	    <Text style={styles.nectusTitle}>NectUS</Text>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    nectusTitle: {
        fontFamily: 'roboto',
    	fontWeight: 'bold',
    	marginTop: 30,
    	color: COLOURS.orange,
    	textAlign: 'center',
    	fontSize: 60,
    },
});

export default StartScreen;
