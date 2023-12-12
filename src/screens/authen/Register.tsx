import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;
const width = Dimensions.get("window").width;
const BASE_URL = 'https://6395736090ac47c6806b55bc.mockapi.io';
const Register = () => {
  const navigation = useNavigation();
    const [name,setName] = useState()
    const [email,setEmail]= useState()
    const [password,setPassword]=useState()

    const handleForm =()=>{
      const apiURL = `${BASE_URL}/users`;
      axios
      .post(apiURL, {
        email:email,
        name: name,
        password: password,
      })
        .then(({ data }) => {
          navigation.navigate('login')
        })
        .catch((error) => {
          return error;
        })
    }

  return (
    <View style={[styles.modal, {bottom: 0}]}>
    <Text
      style={{
        color: '#FF7029',
        width: '100%',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom:30,
      }}>
      Đăng Ký
    </Text>
    <TouchableOpacity
        onPress={() => navigation.navigate('login')}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          gap: 5,
          marginBottom: 30,
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 12,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Nhấn vào
        </Text>
        <Text
          style={{
            color: '#1976D2',
            fontSize: 12,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          đây
        </Text>
        <Text
          style={{
            color: '#000000',
            fontSize: 12,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          để đăng Nhập
        </Text>
      </TouchableOpacity>

    <TextInput
    value={name}
      placeholder="Tên"
      style={styles.inputField}
      onChangeText={text => setName(text)}
    />
    <TextInput
    value={email}
      placeholder="Email"
      style={styles.inputField}
      onChangeText={text => setEmail(text)}
    />
    <TextInput
    value={password}
      placeholder="Mật khẩu"
      style={styles.inputField}
      onChangeText={text => setPassword(text)}
    />

    <TouchableOpacity
      style={styles.submitButton}
      onPress={()=>{handleForm()}}
     >
      <Text style={styles.submitButtonText}>Gửi</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
      width: width,
      height: 'auto',
      flex: 1,
    },
    modal: {
      width: width,
      height: windowHeight,
      zIndex: 10,
      backgroundColor: '#E6EEFA',
      padding: 20,
      flex:1,
      justifyContent:'center',
    },
    closeButton: {
      position: 'absolute',
      top: 20,
      right: 50,
      width: 40,
      height: 40,
      backgroundColor: '#2F80ED',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeButtonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    IconRounded: {
      zIndex: 15,
      width: 60,
      height: 60,
      borderColor: '#FFFFFF',
      borderWidth: 2,
      borderRadius: 100,
      backgroundColor: '#2F80ED',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      width: width,
      height: 'auto',
    },
    BGimage: {
      flex: 1,
      justifyContent: 'center',
      opacity: 0.9,
    },
    mainContent: {
      width: width,
      backgroundColor: '#FFFFFF',
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      elevation: 5,
    },
    topmain: {
      backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 15,
      paddingTop: 10,
      gap: 8,
    },
    smallinformation: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    contentReview: {
      width: '100%',
      padding: 10,
    },
    content: {
      textAlign: 'justify',
      color: '#042940',
      fontSize: 16,
      lineHeight: 35,
    },
    priceBtn: {
      // width: 200,
      // height: 50,
      gap: 3,
      borderRadius: 100,
      backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputField: {
      borderColor: '#ddd',
      borderWidth: 1,
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
    submitButton: {
      backgroundColor: '#1976D2',
      padding: 15,
      margin: 10,
      borderRadius: 100,
    },
    submitButtonText: {
      color: '#fff',
      textAlign: 'center',
    },
    modalSucces: {
      backgroundColor: '#fff',
      flex: 1, justifyContent: "center", alignItems: "center" 
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    checkmark: {
      width: 100,
      height: 100,
    },
    checkmarkImage: {
      width: 80,
      height: 80,
    },
  });