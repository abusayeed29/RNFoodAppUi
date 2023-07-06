import React from 'react';
import { Image, Text, View } from 'react-native';
import { Colors } from '../utils/Colors';

const Banner = () => {
  return (
    <View style={{gap: 15}}>
      <Text style={{fontSize: 20}}>Promotions</Text>
      <View
        style={{
          backgroundColor: Colors.primary,
          height: 150,
          borderRadius: 10,
          paddingHorizontal: 20,
          flexDirection: 'row',
          paddingVertical: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{gap: 12}}>
          <Text style={{fontSize: 15, color: 'white'}}>Todays Offer</Text>
          <Text style={{fontSize: 19, color: 'white'}}>Free box of fries</Text>
          <Text style={{fontSize: 15, color: 'white'}}>
            On all Orders above $150
          </Text>
        </View>
        <Image
          style={{width: 100, height: 100, borderRadius: 100}}
          source={require('../assets/images/welcome.jpg')}
        />
      </View>
    </View>
  );
};

export default Banner;
