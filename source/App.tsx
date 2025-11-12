import { View, Text, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import {
  Button,
  Content,
  FormInput,
  GenderComponent,
  Input,
  SvgIcon,
} from './common/components';
import { RootTheme } from './theme';
import useTheme from './common/hooks/useTheme';
import OnBoardingScreen from './modules/Onboarding/screens/OnBoardingScreen';
import LoginScreen from './modules/Auth/Login/screen/LoginScreen';
import OTPScreen from './modules/Auth/OTP/screens/OTPScreen';
const App = () => {
  const { Colors, Layout, Spacing, Fonts } = useTheme();

  const styles = React.useMemo(
    () => stylesFn({ Colors, Fonts, Layout, Spacing }),
    [Colors, Layout, Fonts, Spacing],
  );

  return <OTPScreen />;
};

const stylesFn = ({ Colors, Fonts, Layout, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      ...Spacing.p4,
      ...Layout.flex,
      // ...Layout.center,
      ...Colors.white,
    },
  });

export default App;
