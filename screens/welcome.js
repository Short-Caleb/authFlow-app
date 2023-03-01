import React, {useContext}from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Context from './context';

export const Welcome = ({navigation }) => {
    const value = useContext(Context)


  return (
    <View>
        <Text> Welcome {value.profile.FName} {value.profile.LName} {value.profile.Email} {value.profile.Password} </Text>
    </View>

  
  )
}

