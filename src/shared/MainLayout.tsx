import React from 'react';
import {View, StyleSheet, Dimensions, SafeAreaView, ScrollView} from 'react-native';

export declare interface MainLayoutProps {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
  [x: string]: any;
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MainLayout = (props: MainLayoutProps): JSX.Element => {
  const {children} = props;

  return <SafeAreaView style={styles.main}>{children}</SafeAreaView>;
};
export default MainLayout;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: 'relative',
    height: 230,
    maxWidth: windowWidth,
    maxHeight: windowHeight,
  },
});
