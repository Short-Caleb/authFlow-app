import React, {useContext}from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Context from './context';

export const Welcome = ({navigation }) => {
    const value = useContext(Context)


  return (
    <View>
        <Text> welcome {value.profile.FName} </Text>
    </View>

  
  )
}

