import { View, StyleSheet, StatusBar } from 'react-native';
import React, { ReactNode } from 'react';
import { scale, scaleVertical } from '../../theme/scale';
import { RootTheme } from '../../theme';
import { useTheme } from '../hooks';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Text } from '../components';

type AppContentProps = {
  isPreAuth?: boolean;
  children?: ReactNode;
  screenHeading: string;
  withButton?: boolean;
  screenSubHeading?: string;
};
const AppContent: React.FC<AppContentProps> = ({
  children,
  withButton,
  screenHeading,
  isPreAuth = true,
  screenSubHeading,
}) => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  let styles = React.useMemo(
    () => stylesFn({ Colors, Layout, Spacing, Fonts }),
    [Colors, Fonts, Layout, Spacing],
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={Colors.whitePure}
      />

      {/* Header */}
      <View style={styles.headerContainer}>
        <Feather
          name="arrow-left"
          size={scale(25)}
          color={Colors.blackPure}
          style={{ ...Spacing.mr4 }}
        />
        {!isPreAuth ? (
          <Text type="subtitle" weight="semiBold">
            {screenHeading}
          </Text>
        ) : null}
      </View>

      <KeyboardAwareScrollView
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {isPreAuth ? (
          <View style={styles.screenHeadingContainer}>
            <Text type="subtitle" weight="semiBold">
              {' '}
              {screenHeading}{' '}
            </Text>
            <Text type="regular">{screenSubHeading}</Text>
          </View>
        ) : null}

        <View style={styles.childrenContainer}>{children}</View>

        {withButton ? (
          <View style={styles.buttonContainer}>
            <Button title="Save Changes" />
          </View>
        ) : null}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const stylesFn = ({ Colors, Fonts, Layout, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      ...Layout.flex,
      ...Colors.background,
    },
    headerContainer: {
      ...Spacing.px4,
      ...Spacing.p5,
      ...Spacing.pb3,
      ...Layout.flexRow,
      ...Layout.alignCenter,
      // backgroundColor: 'pink',
    },
    scrollContainer: {
      flexGrow: 1,
      ...Spacing.px4,
      // ...Spacing.pb6,
    },
    screenHeadingContainer: {
      ...Layout.justifyCenter,
      ...Spacing.py2,
      // ...Spacing.mb4,
      // backgroundColor: 'yellow',
    },
    screenHeading: {
      ...Fonts.sz20,
      ...Fonts.font600,
      ...Colors.textBlack,
      lineHeight: scaleVertical(36),
    },
    screenSubHeading: {
      ...Fonts.sz12,
      ...Fonts.font400,
      ...Colors.textSecondary,
    },
    childrenContainer: {
      flex: 1,
      // ...Spacing.mt2,
      ...Colors.white,
      // backgroundColor: 'yellow',
    },
    buttonContainer: {
      ...Layout.justifyEnd,
    },
  });

export default AppContent;
