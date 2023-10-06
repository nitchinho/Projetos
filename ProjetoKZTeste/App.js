import React from 'react';
import Header from './components/Header';
import Body from './components/Body/index'
import { SafeAreaView, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
    <Header/>
    <Body/>
    </SafeAreaView>
  );
}
