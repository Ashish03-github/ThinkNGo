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
import OTPScreen from './modules/Auth/OTP/screens/OTPScreen';
import FamilyMemberScreen from './modules/Family/screens/FamilyMemberScreen';
const App = () => {
  const { Colors, Layout, Spacing, Fonts } = useTheme();

  const styles = React.useMemo(
    () => stylesFn({ Colors, Fonts, Layout, Spacing }),
    [Colors, Layout, Fonts, Spacing],
  );

  return <FamilyMemberScreen />;
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
