import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import images from '../assets/image';
import React from 'react';

const Banner = () => {
  return (
    <View style={{flex: 1}}>
      <Image
        source={images.general.headerBanner}
        style={{width: '100%', height:250,objectFit:"fill"}}
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({});
