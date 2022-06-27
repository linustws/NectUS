import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';
import { colors } from '../styles/colors';

const Login = () => {
  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />
      <Text style={styles.nectusTitle}>NectUS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nectusTitle: {
    fontFamily: 'roboto-bold',
    marginTop: 50,
    color: colors.orange,
    textAlign: 'center',
    fontSize: 80,
  },
});

export default Login;
