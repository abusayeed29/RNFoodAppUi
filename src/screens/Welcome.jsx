import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../utils/Colors';

const Welcome = () => {
  const nav = useNavigation();
  return (
    <LinearGradient
      colors={[Colors.primary, Colors.secondary]}
      style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          style={styles.imgStyle}
          source={require('../assets/images/welcome.png')}
        />
      </View>
      <Text
        style={{
          fontSize: 40,
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
          lineHeight: 55,
          letterSpacing: 2.5,
          top: -15,
        }}>
        Enjoy Your{'\n'} Food
      </Text>
      <TouchableOpacity
        onPress={() => {
          nav.navigate('Home');
        }}
        style={styles.btnStyle}>
        <Text
          style={{
            fontSize: 20,
            color: Colors.primary,
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: 30,
          }}>
          Get Started
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  imageBox: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 300,
    justifyContent: 'center',
    alignItems: 'center',
    top: 50,
  },
  imgStyle: {
    width: 270,
    height: 270,
    borderRadius: 300,
    backgroundColor: 'red',
  },
  btnStyle: {
    backgroundColor: 'white',
    width: 200,
    height: 55,
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
});
