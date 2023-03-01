import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Context from './context';


export const SignUp = ( {navigation, route}) => {
    const value = useContext(Context)


    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const addprofile = ( ) => { 
        console.log('adding profile...')
        console.log(fname, lname, email, password)
        value.setProfile({FName: fname, LName: lname, Email: email, Password: password})
       // value.storeData({FName: fName, LName: lName, Email: email, Password: password})
      
      }   
        //how it is done for a react web-app 
      // const fnameChange = (e) => {
      //   setFname(e.target.value)
      // }

      // const lnameChange = (e) => {
      //   setLname(e.target.value)
      // }

      // const emailChange = (e) => {
      //   setEmail(e.target.value)
      // }

      // const passwordChange = (e) => {
      //   setPassword(e.target.value)
      // }

  return (
    <View>
        <Text>sign up </Text>
        <Text>First Name</Text>
        <TextInput 
        editable
        value={fname}
        onChangeText={setFname}
        />

        <Text>Last Name</Text>
        <TextInput 
        editable
        value={lname}
        onChangeText={setLname}
        />

        <Text>Email</Text>
        <TextInput 
        editable
        value={email}
        onChangeText={setEmail}
        />

        <Text>Password</Text>
        <TextInput 
        editable
        value={password}
        onChangeText={setPassword}
        />
        <Button title='Create Account' onPress={addprofile} />
    </View>

  
  )
}

