import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors } from '../utils/Colors';

import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Details = ({route}) => {
  const content = route.params.data;
  const nav = useNavigation();
  console.log(content);
  return (
    <ScrollView style={{backgroundColor: Colors.primary}}>
      <View
        style={{
          height: 400,
          backgroundColor: Colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 250, height: 250, borderRadius: 200}}
          source={require('../assets/images/welcome.jpg')}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: 500,
          borderTopLeftRadius: 60,
          paddingHorizontal: 30,
          paddingTop: 40,
          gap: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 80,
              backgroundColor: Colors.primary,
              height: 35,
              borderRadius: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}>
            <FontAwesome name="star" size={20} color="gold" />
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              4.5
            </Text>
          </View>
          <Text
            style={{
              color: Colors.primary,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            ${content.price}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: '500', color: 'black'}}>
            {content.name}
          </Text>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <AntDesign name="pluscircle" size={24} color={Colors.primary} />
            <Text style={{fontWeight: 'bold', fontSize: 19, color: 'black'}}>
              1
            </Text>
            <AntDesign name="minuscircle" size={24} color={Colors.primary} />
          </View>
        </View>

        <Text style={{fontSize: 15, fontWeight: '400'}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          provident blanditiis qui laborum, sint obcaecati iste non eum modi
        </Text>

        {/* add ons */}
        <Text style={{fontSize: 20, fontWeight: '500', color: 'black'}}>
          Add Ons
        </Text>

        <View style={{flexDirection: 'row', gap: 20}}>
          <View>
            <Image
              style={{width: 100, height: 100, borderRadius: 100}}
              source={require('../assets/images/welcome.jpg')}
            />
            <AntDesign
              style={{position: 'absolute', bottom: 0, right: 0}}
              name="pluscircle"
              size={24}
              color="green"
            />
          </View>

          <View>
            <Image
              style={{width: 100, height: 100, borderRadius: 100}}
              source={require('../assets/images/welcome.jpg')}
            />
            <AntDesign
              style={{position: 'absolute', bottom: 0, right: 0}}
              name="pluscircle"
              size={24}
              color="green"
            />
          </View>

          <View>
            <Image
              style={{width: 100, height: 100, borderRadius: 100}}
              source={require('../assets/images/welcome.jpg')}
            />
            <AntDesign
              style={{position: 'absolute', bottom: 0, right: 0}}
              name="pluscircle"
              size={24}
              color="green"
            />
          </View>
        </View>
        {/* add cart */}
        <TouchableOpacity
          onPress={() => {
            nav.navigate('Cart');
          }}
          style={{
            backgroundColor: Colors.primary,
            height: 55,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({});
