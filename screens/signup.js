import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Context from './context';


export const SignUp = ( {navigation}) => {
    const value = useContext(Context)


    const [fName, setFname] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const addprofile = ( ) => { 
        console.log('adding profile...')
        value.setProfile({FName: fName, LName: lName, Email: email, Password: password})
        value.storeData({FName: fName, LName: lName, Email: email, Password: password})
    }   

  return (
    <View>
        <Text>sign up </Text>
        <Text>First Name</Text>
        <TextInput 
        editable
        value={fName}
        onChange={setFname}
        />

        <Text>Last Name</Text>
        <TextInput 
        editable
        value={lName}
        onChange={setLName}
        />

        <Text>Email</Text>
        <TextInput 
        editable
        value={email}
        onChange={setEmail}
        />

        <Text>Password</Text>
        <TextInput 
        editable
        value={password}
        onChange={setPassword}
        />
        <Button title='Create Account' onPress={addprofile} />
    </View>

  
  )
}

