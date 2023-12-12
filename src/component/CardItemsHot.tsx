import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import images from '../assets/image';
interface CardItemHotProps {
  item: any;
}
const CardItemHot = (props: CardItemHotProps) => {
  const {item} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Chi Tiết', item)}>
      <Image
        source={{
          uri: item.avatar,
        }}
        style={styles.IconRounded}
      />
      <View style={styles.priceBtn}>
        <Text style={{color: '#FF0000', fontSize: 11, fontWeight: 500}}>
          {item.price}
        </Text>
        <Text style={{color: '#FF0000', fontSize: 11, fontWeight: 500}}>
        pound
        </Text>
      </View>
      <Image style={styles.img} source={{uri: item.image}} />
      <TouchableOpacity style={styles.tilte}>
        <Text style={styles.tilteText}>{item?.tilte}</Text>
        <View style={styles.buttoninfor}>
        <TouchableOpacity style={styles.smallinfor}>
            <Image
              source={{
                uri: 'https://coastalbreezz.com/wp-content/uploads/2020/04/phone-icon.png',
              }}
              style={{width: 12, height: 12, marginRight: 3}}
            />
            <Text style={{color: '#333333', fontSize: 10, fontWeight: 'bold'}}>
              {item?.phone}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallinfor}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/6948/6948631.png',
              }}
              style={{width: 14, height: 14, marginTop: 1}}
            />
            <Text style={{color: '#333333', fontSize: 10, fontWeight: 'bold'}}>
              {item?.Adress}
            </Text>
          </TouchableOpacity>
          
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CardItemHot;

const styles = StyleSheet.create({
  img: {
    width: 170,
    height: 220,
    borderRadius: 15,
    opacity: 0.9,
  },
  item: {
    position: 'relative',
    width: 180,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  tilte: {
    position: 'absolute',
    top: 150,
    left: 10,
    // textAlign: 'center',
    width: 150,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    opacity: 2,
    borderRadius: 7,
    paddingTop:10,
    paddingLeft:10,
  },
  tilteText: {
    // textAlign: 'center',
    color: '#333333',
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 6,
  },
  emptyMessageStyle: {
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  buttoninfor: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingLeft: 5,
    paddingRight: 5,
  },
  smallinfor: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    // paddingLeft: 3,
    paddingRight: 3,
  },
  IconRounded: {
    position: 'absolute',
    top: 10,
    zIndex: 15,
    right: 18,
    padding: 30,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor: '#2F80ED',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceBtn: {
    position: 'absolute',
    top: 140,
    zIndex: 15,
    right: 18,
    width: 70,
    height: 20,
    gap: 3,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
