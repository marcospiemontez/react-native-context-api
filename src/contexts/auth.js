import React, { createContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [user, setUser] = useState({});
  const navigation = useNavigation()

  function signIn(email, password) {
    if(email !== '' && password !== '') {
      axios.post('http://localhost:3000/authentication/login', {email: email, password: password}).then(res => {
        console.log(res, 'tetete')
        setUser({
          pet: res.data,
          status: 'active'
        })
        navigation.navigate("Home");
      })
    } else {
      alert('Coloca a senha ai cavalo!')
    }
  }


  return (
    <AuthContext.Provider value={{ signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;