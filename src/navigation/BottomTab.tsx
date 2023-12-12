import {StyleSheet, Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Schedule from '../screens/Schedule';
import Favorite from '../screens/Favourite';
import images from '../assets/image';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator sceneContainerStyle={{backgroundColor: 'white'}}>
      <BottomTab.Screen
        name="HomeTab"
        component={Home}
        options={() => {
          return {
            tabBarIcon: ({color, size}) => (
              <Image
                source={images.icons.homeIcon}
                style={{width: 20, height: 20, paddingTop: 5}}
              />
            ),
            headerShown: false,
            tabBarShowLabel: false,
          };
        }}
      />
      <BottomTab.Screen
        name="favorite"
        component={Favorite}
        options={() => {
          return {
            tabBarIcon: ({color, size}) => (
              <Image
                source={images.icons.favoriteIcon}
                style={{width: 20, height: 20, paddingTop: 5}}
              />
            ),
            headerShown: false,
            tabBarShowLabel: false,
          };
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={() => {
          return {
            tabBarIcon: ({color, size}) => (
              <View style={styles.IconRounded}>
                <Image
                  source={images.icons.searchBarIcon}
                  style={{width: 12, height: 12}}
                />
              </View>
            ),
            headerShown: false,
            tabBarShowLabel: false,
          };
        }}
      />
      <BottomTab.Screen
        name="schadule"
        component={Schedule}
        options={() => {
          return {
            tabBarIcon: ({color, size}) => (
              <Image
                source={images.icons.schaduleIcon}
                style={{width: 20, height: 20, paddingTop: 5}}
              />
            ),
            headerShown: false,
            tabBarShowLabel: false,
          };
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={() => {
          return {
            tabBarIcon: ({color, size}) => (
              <Image
                source={images.icons.profileIcon}
                style={{width: 20, height: 20, paddingTop: 5}}
              />
            ),
            headerShown: false,
            tabBarShowLabel: false,
          };
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  IconRounded: {
    padding: 7,
    borderRadius: 100,
    backgroundColor: '#2F80ED',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
