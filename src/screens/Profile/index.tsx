import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { TouchEventType } from 'react-native-gesture-handler/lib/typescript/TouchEventType';
const windowHeight = Dimensions.get('window').height;
const width = Dimensions.get("window").width;
const Profile = () => {
  const navigation = useNavigation();
  
  const handleForm = async()=>{
    await AsyncStorage.removeItem('@Token');
    navigation.navigate('login')
  }
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.author}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://chungcuhatecolaroma.net.vn/wp-content/uploads/2022/10/9c6bb52ab0a16367e8cb1e00121a18ed.jpg'}}
        />
        <View style={styles.meta}>
          <Text style={styles.name}>Knowledge Bot</Text>
          <Text style={styles.timestamp}>1st Jan 2025</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          handleForm();
        }}>
        <Text style={styles.submitButtonText}>Đăng xuất</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    width:width,
    height:windowHeight,
    position:"relative",
    backgroundColor: 'white',
  },
  submitButton: {
    width:width/2,
    backgroundColor: '#1976D2',
    padding: 10,
    margin: 10,
    borderRadius: 100,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    paddingVertical: 16,
  },
  author: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  meta: {
    marginHorizontal: 8,
    justifyContent: 'center',
  },
  name: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  timestamp: {
    color: '#999',
    fontSize: 14,
    lineHeight: 21,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  paragraph: {
    color: '#000',
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 8,
  },
});