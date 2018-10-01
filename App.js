import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

// components
import Login from './src/components/auth/Login/Login'
import Apply from './src/components/dashboard/Apply/Apply'
import Announcement from './src/components/dashboard/Announcement/Announcement'
import History from './src/components/dashboard/History/History'
import Feedback from './src/components/dashboard/Feedback/Feedback'

export default createStackNavigator({
  Login: {
    screen: Login
  },
  Apply: {
    screen:  Apply
  },
  Announcement: {
    screen: Announcement
  },
  History : {
    screen: History
  },
  Feedback: {
    screen: Feedback
  }
});