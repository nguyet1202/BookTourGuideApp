import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTab';
import MainLayout from '../shared/MainLayout';
import DetailPage from '../screens/Home/DetailPage';
import Login from '../screens/authen/Login';
import Register from '../screens/authen/Register';
// import ALLHotplaces from '../components/Post/Allhotplaces';
// import DetailPage from '../screens/HomeTab/detailpage';


const Stack = createNativeStackNavigator();

const Navigation = () => {

  const getToken = async () => {
    return await AsyncStorage.getItem('@Token');
  };
  
  const Loadingg = () => {
    const navigation = useNavigation();
    getToken().then(response => {
      const routeName = response ? 'Main' : 'login';
      navigation.reset({
        index: 0,
        routes: [{name: routeName}],
      });
    }, []);
  };
  
  return (
    <NavigationContainer>     
      <Stack.Navigator
        initialRouteName={'loading'}
        screenOptions={{
          animation: 'slide_from_bottom',
        }}>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chi Tiết"
          component={DetailPage}
        /> 
        <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="loading"
        options={{headerShown: false}}
        component={Loadingg}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;