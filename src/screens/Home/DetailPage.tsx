import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Modal} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import images from '../../assets/image';
import { project } from '../../../react-native.config';

const windowHeight = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const DetailPage = () => {
  const route = useRoute();
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleSuccess, setIsVisibleSuccess] = useState(false);

  const [name,setName] = useState()
  const [email,setEmail]= useState()
  const [phone,setPhone]=useState()

  const handleForm=()=>{
    setIsVisible(false)
    setIsVisibleSuccess(true)
    setTimeout(() => {
        setIsVisibleSuccess(false);
      }, 900);
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{uri: route?.params?.image}}
          style={{width: '100%', height: 250, objectFit: 'fill'}}
        />
      </View>
      <View style={styles.mainContent}>
        <View style={styles.topmain}>
          <Image
            source={{
              uri: route?.params?.avatar,
            }}
            style={styles.IconRounded}
          />
          <Text
            style={{
              color: '#FF7029',
              width: '100%',
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {route?.params?.tilte}
          </Text>
          <View style={styles.smallinformation}>
            <Text
              style={{
                color: '#FF7029',
                fontSize: 10,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingRight: 5,
              }}>
              {route?.params?.Adress}
            </Text>
            <Text
              style={{
                color: '#FF7029',
                fontSize: 10,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingLeft: 5,
                textDecorationLine: 'underline',
              }}>
              {route?.params?.phone}
            </Text>
          </View>
        </View>
        <View style={styles.contentReview}>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 'bold',
                // paddingLeft: 15,
                paddingBottom: 15,
              }}>
              Thông tin review
            </Text>
          </View>
          <View>
            <Text style={styles.content}>{route?.params?.Content}</Text>
          </View>
        </View>
        <View
          style={{
            width: width,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 15,
            marginRight: 15,
          }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                setIsVisible(true);
              }}
              style={{
                padding: 20,
                backgroundColor: '#2F80ED',
                borderRadius: 30,
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 16,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Đặt tour ngay
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              marginRight: 35,
              marginBottom: 20,
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <View>
              <Text style={{color: '#000000', fontSize: 20, fontWeight: 500}}>
                Tổng giá/tour
              </Text>
            </View>

            <View style={styles.priceBtn}>
              <Text style={{color: '#FF0000', fontSize: 40, fontWeight: 500}}>
                {route?.params?.price}
              </Text>
              <Text style={{color: '#000000', fontSize: 20, fontWeight: 500}}>
              pound
              </Text>
            </View>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isVisible}
          onRequestClose={() => setIsVisible(false)}>
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
              Đặt tour
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsVisible(false)}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>

            {/* Input fields */}
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
            value={phone}
              placeholder="Số điện thoại"
              style={styles.inputField}
              onChangeText={text => setPhone(text)}
            />

            {/* Submit button */}
            <TouchableOpacity
              style={styles.submitButton}
              onPress={()=>{handleForm()}}
             >
              <Text style={styles.submitButtonText}>Gửi</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
        animationType="slide"
        transparent={true}
        visible={isVisibleSuccess}
        onRequestClose={() => setIsVisibleSuccess(false)}
      >
        <View style={styles.modalSucces}>
          <Text style={styles.text}>Đặt tour thành công!</Text>
          <View style={styles.checkmark}>
            <Image
              source={images.icons.successIcon}
              style={styles.checkmarkImage}
            />
          </View>
        </View>
      </Modal>
      </View>
    </ScrollView>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 'auto',
    flex: 1,
  },
  modal: {
    width: width,
    height: 420,
    position: 'absolute',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    bottom: 0,
    zIndex: 10,
    backgroundColor: '#E6EEFA',
    padding: 20,
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
