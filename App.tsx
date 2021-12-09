import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer} from "@react-navigation/native";
import {Navigation} from './navigation'
import { Storage } from "./services";


export default function App() {

  return (
      <SafeAreaProvider>
		    <Navigation/>
        <StatusBar style="auto" />
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
