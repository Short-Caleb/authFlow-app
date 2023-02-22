import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import *  as React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp } from './screens/signup';
import { Welcome } from './screens/welcome';
import Context from './screens/context';

const Stack = createNativeStackNavigator();

export default function App() {

const [hasProfile, setHasProfile] = useState(false);
const [userProfile, setUserProfile] = useState({});
//const [firstRun, setFirstRun] = useState(true) this si a maybe in case we want to have a screen to step users thru and them not having ever run the app on their phone 

useEffect(() => {
  async function restoreProfile(){
    let permInfo;
    permInfo = await getProfile();

    if(permInfo === null || permInfo === {}) {
     permInfo = {FName: '', LName: '',Email:'', Password: ''};
     setHasProfile(false);
     setUserProfile(permInfo);
     
    } else{
        setHasProfile(true);
        setUserProfile(permInfo);
         
  }
}
  restoreProfile();
}, [userProfile]);


const storeProfile = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
};


const getProfile = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
};




  return (
  <Context.Provider value = {{ profile: userProfile, setProfile: setUserProfile, storeData: storeProfile}}>
      <NavigationContainer>
        <Stack.Navigator>
            { 
              hasProfile ? (
                <Stack.Screen name="Signup" component={Welcome}/>
              ) :(
                <Stack.Screen name="Signup" component={SignUp}/>
              )
            }
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
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
