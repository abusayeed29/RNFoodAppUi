import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../utils/Colors';

const Fooditems = () => {
  const food = [
    {
      id: 1,
      name: 'Chicken 1',
      price: 100,
      image: 'https://fastfood.theringer.com/img/items/2.jpg',
    },
    {
      id: 2,
      name: 'Chicken 2',
      price: 100,
      image: 'https://fastfood.theringer.com/img/items/2.jpg',
    },
    {
      id: 3,
      name: 'Chicken 3',
      price: 100,
      image: 'https://fastfood.theringer.com/img/items/2.jpg',
    },

    {
      id: 4,
      name: 'Chicken 4',
      price: 100,
      image: 'https://fastfood.theringer.com/img/items/2.jpg',
    },
    {
      id: 5,
      name: 'Chicken 5',
      price: 100,
      image: 'https://fastfood.theringer.com/img/items/2.jpg',
    },
  ];

  return (
    <View style={{gap: 20}}>
      <Text style={{fontSize: 20}}>Popular</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={food}
        renderItem={({item, index}) => (
          <View
            style={{
              backgroundColor: '#E3E3E3',
              width: 150,
              height: 200,
              marginRight: 20,
              borderRadius: 20,
              paddingHorizontal: 20,
              paddingVertical: 20,
              gap: 10,
            }}>
            <Image
              style={{
                width: 85,
                height: 85,
                borderRadius: 100,
                alignSelf: 'center',
              }}
              source={{uri: item.image}}
            />
            <Text style={{fontSize: 20, textAlign: 'center'}}>{item.name}</Text>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.primary,
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                ${item.price}
              </Text>
              <Ionicons name="add-circle" size={24} color="green" />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Fooditems;
