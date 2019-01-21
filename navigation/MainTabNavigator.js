import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import InboxScreen from '../screens/InboxScreen';
import ProcessScreen from '../screens/ProcessScreen';
import ProjectsScreen from '../screens/ProjectsScreen';

const InboxStack = createStackNavigator({
  Home: InboxScreen,
});

InboxStack.navigationOptions = { 
  tabBarLabel: 'Inbox',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-add'
      }
    />
  ),
};




//  LINKS STACK > PROCESS STACK
const ProcessStack = createStackNavigator({
  Process: ProcessScreen,
});

ProcessStack.navigationOptions = {
  tabBarLabel: 'Process',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-repeat'}
    />
  ),
};

const ProjectsStack = createStackNavigator({
  Settings: ProjectsScreen,
});




//  SETTINGS STACK > PROJECTS
ProjectsStack.navigationOptions = {
  tabBarLabel: 'Projects',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-list'}
    />
  ),
};

export default createBottomTabNavigator({
  InboxStack,
  ProcessStack,
  ProjectsStack,
});
