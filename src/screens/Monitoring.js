import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { BlurView } from 'expo-blur';

const Monitoring = ({ navigation }) => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{
        flex:1, 
        alignItems: 'center', 
        justifyContent:'center'
        }}>
        <View style={{height: 100, width: 100, borderWidth:1, backgroundColor:'#e9e4f8', marginLeft: -20, marginTop: -90, borderRadius: 50, borderColor:'#e9e4f8', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,
elevation: 10}}>
        </View>
        <View style={{height: 100, width: 100, borderWidth:1, backgroundColor:'#e7f1fb', marginLeft: 90, marginTop: -40, borderRadius: 50, borderColor:'#e7f1fb', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,
elevation: 10}}>
        </View>
        <View style={{height: 100, width: 100, borderWidth:1, backgroundColor:'#f9e9e7',marginLeft: -90, marginTop: -100, borderRadius: 50, borderColor:'#f9e9e7', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,
elevation: 10}}>
        </View>
        {/* <View style={{height: 200, width: 200, backgroundColor:'#f6f8fc', marginTop: -170, opacity: 0.5}}>
        </View> */}
        <BlurView intensity={100} tint="light" style={{height: 200, width: '100%', marginTop: -170, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
        </BlurView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
  logoContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
})

export default Monitoring