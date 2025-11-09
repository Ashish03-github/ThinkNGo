import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button, Content, FormInput, Input } from './common/components';
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
      isPreAuth={false}
      withButton
      screenHeading="Edit Profile"
      // shouldShowBottomSheet
      // bottomSheetTriggerLabel="Review in Bottom Sheet"
      // bottomSheetSnapPoint="60%"
      // bottomSheetContent={({ close }) => (
      //   <View style={styles.sheetContent}>
      //     <Text style={styles.sheetTitle}>Changes ready to save?</Text>
      //     <Text style={styles.sheetDescription}>
      //       Review your updates and confirm. You can always come back and tweak
      //       things later.
      //     </Text>
      //     <View style={styles.sheetActions}>
      //       <Button onPress={close} title="Dismiss" />
      //       <Button
      //         onPress={() => {
      //           console.log('Primary action triggered');
      //           close();
      //         }}
      //         title="Save & Continue"
      //       />
      //     </View>
      //   </View>
      // )}
    >
      <FormInput label="Allergies" placeholder="Please add allergies" />
      <FormInput label="Allergies" placeholder="Please add allergies" />
      <FormInput label="Allergies" placeholder="Please add allergies" />
      <FormInput label="Allergies" placeholder="Please add allergies" />
      <FormInput label="Allergies" placeholder="Please add allergies" />
      <FormInput label="Allergies" placeholder="Please add allergies" />
      <FormInput label="Allergies" placeholder="Please add allergies" />
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
