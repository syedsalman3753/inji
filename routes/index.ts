import React from 'react';
import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { AuthScreen } from '../screens/AuthScreen';
import { BiometricScreen } from '../screens/BiometricScreen';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { PasscodeScreen } from '../screens/PasscodeScreen';
import { MainLayout } from '../screens/MainLayout';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { Image } from 'react-native';

export const baseRoutes: Screen[] = [
  {
    name: 'Welcome',
    component: WelcomeScreen,
    options: {
      headerLeft: () =>
        React.createElement(Image, {
          source: require('../assets/idpass-logo.png'),
          style: { width: 124, height: 27, resizeMode: 'contain' },
        }),
    },
  },
  {
    name: 'Auth',
    component: AuthScreen,
  },
  {
    name: 'Passcode',
    component: PasscodeScreen,
  },
  {
    name: 'Biometric',
    component: BiometricScreen,
  },
];

export const authRoutes: Screen[] = [
  {
    name: 'Main',
    component: MainLayout,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Notifications',
    component: NotificationsScreen,
  },
];

export type RootStackParamList = {
  Welcome: undefined;
  Auth: undefined;
  Passcode: {
    setup: boolean;
  };
  Biometric: {
    setup: boolean;
  };
  Main: undefined;
  Notifications: undefined;
};

export interface Screen {
  name: string;
  component: React.FC<RootRouteProps>;
  options?: NativeStackNavigationOptions;
}

export type RootRouteProps = NativeStackScreenProps<RootStackParamList>;

export type PasscodeRouteProps = NativeStackScreenProps<
  RootStackParamList,
  'Passcode'
>;

export type BiometricRouteProps = NativeStackScreenProps<
  RootStackParamList,
  'Biometric'
>;
