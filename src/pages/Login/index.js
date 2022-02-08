import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/auth'


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext)

  
  function handleLogin(){
    signIn(email, password);
    console.debug(signIn);
  }
  
 return (
   <View style={styles.firstContainer}>
    <View style={styles.container}>
      <Text style={styles.title}>Seja bem vindo(a)!</Text>

      <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Digite seu email"
      />

      <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Digite sua senha"
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  firstContainer: {
    backgroundColor: '#e3e3e3',
    width: '100%'
  },
  
  container:{
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    paddingTop: 80,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  title:{
    fontWeight: 'bold',
    color:'#333333',
    marginBottom: 14,
    fontSize: 20,
  },
  input:{
    width: '90%',
    height: 45,
    backgroundColor: '#e9e9e9e9',
    borderRadius: 4,
    marginBottom: 14,
    padding: 8,
  },
  button:{
    width: '90%',
    height: 45,
    backgroundColor: '#60516c',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF'
  },
})