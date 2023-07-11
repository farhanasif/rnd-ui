import * as React from 'react';
import { View, Text, Button } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Back to home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default Login