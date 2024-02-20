import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CalendarScreen from '../screens/CalendarScreen';

export type CalendarParamList = {
  Calendar: undefined;
};

const Calendar = createNativeStackNavigator<CalendarParamList>();

const CalendarNavigator = () => {
  return (
    <Calendar.Navigator>
      <Calendar.Screen name="Calendar" component={CalendarScreen} />
    </Calendar.Navigator>
  );
};

export default CalendarNavigator;
