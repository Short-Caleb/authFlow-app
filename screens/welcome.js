import React, {useContext}from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Context from './context';

export const Welcome = () => {
    const value = useContext(Context)


const logOut = ( ) => {
async function removeItemValue() {
  try {
    await AsyncStorage.removeItem('@storage_Key_cal8')
    value.Logout();
    return true;
  }
 catch (exception) {
    return(false)
 }
}
removeItemValue();
}

  return (
    <View>
        <Text> Welcome {value.profile.FName} {value.profile.LName} {value.profile.Email} {value.profile.Password} </Text>
   
        <Button onPress={logOut} title='Logout'/>
    </View>

  
  )
}

