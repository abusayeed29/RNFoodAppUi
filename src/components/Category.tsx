import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../utils/Colors';

const Category = () => {
  const [selected, setSelected] = useState(0);

  const cats = [
    'All',
    'Burger',
    'Pizza',
    'Desserts',
    'Drinks',
    'Fruits',
    'Vegetables',
    'Beverages',
    'Others',
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={cats}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => {
            setSelected(index);
          }}
          activeOpacity={0.9}
          style={{marginRight: 10}}>
          <View
            style={{
              width: 70,
              height: 80,
              backgroundColor: selected === index ? Colors.primary : '#E3E3E3',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Image
              style={{width: 60, height: 60, borderRadius: 100}}
              source={require('../assets/images/welcome.jpg')}
            />
          </View>
          <Text
            style={{
              marginTop: 5,
              textAlign: 'center',
              color: selected === index ? Colors.primary : 'grey',
            }}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Category;
