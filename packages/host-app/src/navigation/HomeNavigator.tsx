import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NavBar from '../components/NavBar';
import UpcomingScreen from '../screens/UpcomingScreen';
import BookingAppScreen from '../screens/BookingScreen';

export type HomeStackParamList = {
  Home: undefined;
  Upcoming: undefined;
  BookingApp: undefined;
  MiniApp: undefined;
};

const Home = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        header: NavBar,
      }}>
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="Upcoming" component={UpcomingScreen} />
      <Home.Screen name="BookingApp" component={BookingAppScreen} />
      <Home.Screen name="MiniApp" component={BookingAppScreen} />
    </Home.Navigator>
  );
};

export default HomeNavigator;
