import React from 'react';
import { Image, Text, View } from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 35}}>Menu</Text>
      <Image
        style={{width: 50, height: 50, borderRadius: 50}}
        source={require('../assets/images/welcome.jpg')}
      />
    </View>
  );
};

export default Header;
