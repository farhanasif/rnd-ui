import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Login = ({ navigation }) => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <LinearGradient
        colors={['#FFF','#e9e4f8', '#e7f1fb', '#FFF']}
        style={styles.logoContainer}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 0.6, y: 0.6 }}
        >
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </LinearGradient>
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      <View style={{flex: 1, backgroundColor: 'blue'}} />
      <View style={{flex: 1, backgroundColor: 'green'}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
  logoContainer: {
    flex: 2, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
})

export default Login