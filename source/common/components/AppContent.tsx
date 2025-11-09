import { View, StyleSheet, StatusBar } from 'react-native';
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { scale, scaleVertical } from '../../theme/scale';
import { RootTheme } from '../../theme';
import { useTheme } from '../hooks';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Text } from '../components';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppBottomSheet from './AppBottomSheet';

type AppContentProps = {
  isPreAuth?: boolean;
  children?: ReactNode;
  screenHeading: string;
  withButton?: boolean;
  screenSubHeading?: string;
  shouldShowBottomSheet?: boolean;
  bottomSheetTriggerLabel?: string;
  bottomSheetContent?:
    | ReactNode
    | ((helpers: { close: () => void }) => ReactNode);
  bottomSheetDefaultVisible?: boolean;
  bottomSheetSnapPoint?: number | `${number}%`;
  bottomSheetEnableBackdropDismiss?: boolean;
  onBottomSheetOpen?: () => void;
  onBottomSheetClose?: () => void;
};
const AppContent: React.FC<AppContentProps> = ({
  children,
  withButton,
  screenHeading,
  isPreAuth = false,
  screenSubHeading,
  shouldShowBottomSheet,
  bottomSheetTriggerLabel,
  bottomSheetContent,
  bottomSheetDefaultVisible,
  bottomSheetSnapPoint,
  bottomSheetEnableBackdropDismiss,
  onBottomSheetOpen,
  onBottomSheetClose,
}) => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();

  const styles = useMemo(
    () => stylesFn({ Colors, Layout, Spacing, Fonts }),
    [Colors, Fonts, Layout, Spacing],
  );

  const [isSheetVisible, setSheetVisible] = useState(
    bottomSheetDefaultVisible ?? false,
  );

  const hasBottomSheetContent = Boolean(bottomSheetContent);

  const derivedBottomSheetFlag =
    typeof shouldShowBottomSheet === 'boolean'
      ? shouldShowBottomSheet
      : hasBottomSheetContent;
  const canRenderBottomSheet = hasBottomSheetContent && derivedBottomSheetFlag;

  useEffect(() => {
    if (typeof bottomSheetDefaultVisible === 'boolean') {
      setSheetVisible(bottomSheetDefaultVisible);
    }
  }, [bottomSheetDefaultVisible]);

  useEffect(() => {
    if (!canRenderBottomSheet) {
      setSheetVisible(false);
    }
  }, [canRenderBottomSheet]);

  const handlePresentModalPress = useCallback(() => {
    if (!canRenderBottomSheet) {
      return;
    }
    setSheetVisible(true);
    onBottomSheetOpen?.();
  }, [canRenderBottomSheet, onBottomSheetOpen]);

  const handleCloseSheet = useCallback(() => {
    setSheetVisible(false);
    onBottomSheetClose?.();
  }, [onBottomSheetClose]);

  const renderBottomSheetContent = () => {
    if (!bottomSheetContent) {
      return (
        <View style={styles.fallbackContent}>
          <Text type="subtitle" weight="semiBold">
            Bottom sheet content not provided.
          </Text>
          <Button onPress={handleCloseSheet} title="Close" />
        </View>
      );
    }

    if (typeof bottomSheetContent === 'function') {
      return bottomSheetContent({ close: handleCloseSheet });
    }

    return bottomSheetContent;
  };

  const HeaderComponent = () => (
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
  );

  const ChildComponent = () => (
    <KeyboardAwareScrollView
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {isPreAuth ? (
        <View style={styles.screenHeadingContainer}>
          <Text type="subtitle" weight="semiBold">
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
      {canRenderBottomSheet ? (
        <View style={styles.buttonContainer}>
          <Button
            onPress={handlePresentModalPress}
            title={bottomSheetTriggerLabel ?? 'Show Details'}
          />
        </View>
      ) : null}
    </KeyboardAwareScrollView>
  );

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent
          barStyle={'dark-content'}
          backgroundColor={Colors.whitePure}
        />

        {/* Header */}
        <HeaderComponent />

        {/* Child */}
        <ChildComponent />
      </SafeAreaView>

      {canRenderBottomSheet ? (
        <AppBottomSheet
          isVisible={isSheetVisible}
          onClose={handleCloseSheet}
          snapPoint={bottomSheetSnapPoint}
          enableBackdropDismiss={bottomSheetEnableBackdropDismiss}
        >
          <View style={styles.contentContainer}>
            {renderBottomSheetContent()}
          </View>
        </AppBottomSheet>
      ) : null}
    </GestureHandlerRootView>
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
      ...Spacing.py6,
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
      ...Spacing.py5,
      // ...Spacing.mb4,
      // backgroundColor: 'yellow',
    },
    screenHeading: {
      ...Fonts.sz20,
      ...Fonts.font600,
      ...Colors.textBlack,
      lineHeight: scaleVertical(40),
    },
    screenSubHeading: {
      ...Fonts.sz12,
      ...Fonts.font400,
      ...Colors.textSecondary,
    },
    childrenContainer: {
      flex: 1,
      ...Spacing.pt3,
      ...Colors.white,
    },
    buttonContainer: {
      ...Layout.justifyStart,
      ...Spacing.bottom2,
    },
    contentContainer: {
      flex: 1,
      ...Spacing.pt3,
      ...Spacing.px2,
      ...Layout.justifyBetween,
    },
    fallbackContent: {
      ...Spacing.pl2,
      ...Layout.flex,
      ...Layout.justifyBetween,
    },
  });

export default AppContent;
