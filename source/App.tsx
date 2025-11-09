import { View, Text, StyleSheet } from 'react-native';
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
const App = () => {
  const { Colors, Layout, Spacing, Fonts } = useTheme();

  const styles = React.useMemo(
    () => stylesFn({ Colors, Fonts, Layout, Spacing }),
    [Colors, Layout, Fonts, Spacing],
  );

  return (
    <Content
      withButton
      screenHeading="Create Account"
      screenSubHeading="Please fill all the details given below"
    >
      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <Input isPhone placeholder="Mobile Number" />
      <Input placeholder="Date of Birth" />
      <Input isDropdown placeholder="Blood Group" />
      <GenderComponent />
    </Content>
  );
};

const stylesFn = ({ Colors, Fonts, Layout, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      ...Spacing.p4,
      ...Layout.flex,
      ...Layout.center,
      ...Colors.white,
    },
    heading: {
      ...Fonts.sz20,
      ...Spacing.p10,
      ...Fonts.font600,
      ...Layout.roundedMd,
      ...Colors.background,
      ...Colors.textPrimary,
    },
    sheetContent: {},
    sheetTitle: {
      ...Fonts.sz18,
      ...Fonts.font600,
      ...Colors.textBlack,
      ...Spacing.mb2,
    },
    sheetDescription: {
      ...Fonts.sz14,
      ...Fonts.font400,
      ...Colors.textSecondary,
      ...Spacing.mb4,
    },
    sheetActions: {
      ...Spacing.mt2,
    },
  });

export default App;
