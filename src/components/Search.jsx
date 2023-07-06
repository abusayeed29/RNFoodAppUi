import React from 'react';
import { TextInput, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Search = () => {
  return (
    <View
      style={{
        backgroundColor: '#e3e3e3',
        height: 45,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        paddingHorizontal: 15,
      }}>
      <Feather name="search" size={24} color="black" />
      <TextInput style={{flex: 0.9, fontSize: 17}} placeholder="Search" />
    </View>
  );
};

export default Search;
