import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

export type HomeStackParamList = {
  Home: undefined;
  Upcoming: undefined;
};

const Home = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        title: 'Booking',
      }}>
      <Home.Screen name="Home" component={HomeScreen} />
    </Home.Navigator>
  );
};

export default HomeNavigator;
