import * as React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Login Here"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Monitor"
        onPress={() => navigation.navigate('Monitor')}
      />
    </View>
  )
}

export default Home