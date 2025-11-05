import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from './common/components';
import { RootTheme } from './theme';
import useTheme from './common/hooks/useTheme';
const App = () => {
  const { Colors, Layout, Spacing, Fonts } = useTheme();

  const styles = React.useMemo(
    () => stylesFn({ Colors, Fonts, Layout, Spacing }),
    [Colors, Layout, Fonts, Spacing],
  );
  return (
    <View style={styles.container}>
      <Button title="Button 1" />
      <Button isBordered />
    </View>
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
  });

export default App;
