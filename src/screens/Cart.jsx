import React from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../utils/Colors';

const Cart = () => {
  const dataFood = [
    {
      id: 1,
      name: 'Pizza',
      price: 250,
    },
    {
      id: 2,
      name: 'Burger',
      price: 250,
    },
  ];

  return (
    <SafeAreaView
      style={{
        paddingTop: 30,
        paddingHorizontal: 25,
        gap: 20,
        backgroundColor: 'white',
        flex: 1,
      }}>
      <Text style={{fontSize: 22, fontWeight: '500'}}>2 Items in Cart</Text>
      <View style={{height: 300}}>
        <FlatList
          data={dataFood}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  height: 130,
                  backgroundColor: 'white',
                  borderRadius: 20,
                  marginBottom: 10,
                  gap: 5,
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                }}>
                {/* left side start */}
                <View
                  style={{
                    width: '35%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    backgroundColor: '#f0edf8',
                  }}>
                  <Image
                    style={{width: 90, height: 90, borderRadius: 10}}
                    source={require('../assets/images/welcome.jpg')}
                  />
                </View>
                {/* left side ned */}
                {/* right side start */}
                <View
                  style={{
                    flex: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    justifyContent: 'space-between',
                    borderRadius: 20,
                  }}>
                  <View style={{gap: 5}}>
                    <Text style={{fontSize: 16, fontWeight: '500'}}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: '#98942c',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      ${item.price}
                    </Text>
                  </View>
                  {/* add minus btn */}
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      alignItems: 'center',
                    }}>
                    <AntDesign
                      name="pluscircle"
                      size={20}
                      color={Colors.primary}
                    />
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        color: 'black',
                      }}>
                      1
                    </Text>
                    <AntDesign
                      name="minuscircle"
                      size={20}
                      color={Colors.primary}
                    />
                  </View>
                  {/* end add minus btn */}
                </View>
              </View>
            );
          }}
        />
      </View>

      {/* start order information */}
      <Text style={{fontSize: 22, fontWeight: '500'}}>Order Instructions</Text>
      <View
        style={{
          height: 100,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'black',
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}>
        <TextInput style={{height: 55, fontSize: 17}} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Total:</Text>
        <Text style={{fontSize: 17, fontWeight: '500', color: '#98942C'}}>
          $200
        </Text>
      </View>
      {/* start Cehckout Button */}
      <TouchableOpacity
        style={{
          backgroundColor: Colors.primary,
          height: 60,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: '700'}}>
          Checkout
        </Text>
      </TouchableOpacity>
      <Text
        onPress={() => {
          console.log('back press');
        }}
        style={{
          textAlign: 'center',
          fontSize: 19,
          fontWeight: '600',
        }}>
        Back to Menu
      </Text>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
