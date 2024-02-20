import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeNavigator from './HomeNavigator';

export type TabsParamList = {
  HomeNavigator: undefined;
};

const Tabs = createMaterialBottomTabNavigator<TabsParamList>();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          title: 'Home',
          tabBarIcon: 'home',
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
