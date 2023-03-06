import { useState, useEffect, createContext, useContext } from 'react';

const Context = createContext(
    {
        profile: null,
         setProfile: (user) => {} ,
          storeData: (user) => {},
          Logout: () => {}
        });

export default Context






