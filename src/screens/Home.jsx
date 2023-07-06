import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Fooditems from '../components/Fooditems';
import Header from '../components/Header';
import Search from '../components/Search';

export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{}}>
      <SafeAreaView style={{paddingHorizontal: 20, paddingTop: 30, gap: 20}}>
        <Header />
        <Search />
        <Category />
        <Banner />
        <Fooditems />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
});
