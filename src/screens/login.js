import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';
import { colors } from '../styles/colors';

const Login = () => {
  const linkToNUS = () => console.log("hi");
  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />
      <Text style={styles.nectusTitle}>NectUS</Text>
      <View style ={styles.imageContainer}>
        <Image
          style={{
            resizeMode: "contain",
            height: 300,
            width: 300
            
          }}
          source={require("../../assets/connect.png")}
        />
      </View>
      <TouchableOpacity onPress={linkToNUS}>
      <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>Connect and meet new friends from NUS</Text>
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
  imageContainer: {
    alignItems: 'center',
  },
  loginText: {
    fontFamily: 'roboto-bold',
    margin: 25,
    backgroundColor: colors.orange,
    textAlign: 'center',
    fontSize: 30,
    padding: 15,
    borderRadius: 20,
    overflow: 'hidden'
  },
  footer: {
    fontFamily: 'roboto-bold',
    textAlign: 'center',
    fontSize: 20,
    padding: 20,
  },
});

export default Login;
