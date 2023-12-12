import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../assets/image';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.navIcon}>
        <Image
          source={images.icons.menuTopicon}
          style={{width: 15, height: 15}}
        />
      </View>
      <View style={styles.right}>
        <View style={styles.myInfo}>
          <Image
            source={{
                uri: 'https://i.pinimg.com/originals/4d/3f/f7/4d3ff79df04c8bb2779b56ce9ab9707c.jpg',
              }}
            style={{width: 20, height: 20,borderRadius:100}}
          />
          <Text>Mattel</Text>
        </View>
        <View style={styles.languageIcon}>
          <Image
            source={images.icons.languageIcon}
            style={{width: 20, height: 20,objectFit:"cover"}}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    position: 'absolute',
    top: 20,
    zIndex: 10,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navIcon: {
    padding:10,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageIcon: {
    padding:10,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
  },
  myInfo: {
    paddingLeft:7,
    paddingRight:25,
    paddingVertical:7,
    gap: 5,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
