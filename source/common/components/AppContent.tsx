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
  headingType?: 'bold' | 'normal';
  screenHeading?: string;
  withButton?: boolean;
  buttonTitle?: string;
  screenSubHeading?: string;
  disableBackButton?: boolean;
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
  onButtonPress?: () => void;
};
const AppContent: React.FC<AppContentProps> = ({
  children,
  withButton,
  buttonTitle = 'Continue',
  screenHeading,
  headingType = 'normal',
  isPreAuth = false,
  screenSubHeading,
  disableBackButton = false,
  shouldShowBottomSheet,
  bottomSheetTriggerLabel,
  bottomSheetContent,
  bottomSheetDefaultVisible,
  bottomSheetSnapPoint,
  bottomSheetEnableBackdropDismiss,
  onBottomSheetOpen,
  onBottomSheetClose,
  onButtonPress,
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
      {!disableBackButton && (
        <Feather
          name="arrow-left"
          size={scale(25)}
          color={Colors.blackPure}
          style={{ ...Spacing.mr4 }}
        />
      )}
      {!isPreAuth ? (
        <Text type="subtitle" weight="semiBold">
          {screenHeading}
        </Text>
      ) : null}
    </View>
  );

  const ChildComponent = () => (
    <KeyboardAwareScrollView
      enableOnAndroid={false}
      enableAutomaticScroll={false}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
      extraScrollHeight={scale(100)}
    >
      {isPreAuth ? (
        <View style={styles.screenHeadingContainer}>
          {headingType === 'bold' ? (
            <>
              <Text type="h3" weight="bold">
                {screenHeading}{' '}
              </Text>
              <Text type="regular" style={{ lineHeight: scale(36) }}>
                {screenSubHeading}
              </Text>
            </>
          ) : (
            <>
              <Text type="subtitle" weight="semiBold">
                {screenHeading}{' '}
              </Text>
              <Text type="regular">{screenSubHeading}</Text>
            </>
          )}
        </View>
      ) : null}

      <View style={styles.childrenContainer}>{children}</View>
    </KeyboardAwareScrollView>
  );

  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaView style={styles.container} edges={['top']}>
        <StatusBar
          backgroundColor={Colors.whitePure}
          barStyle={'dark-content'}
        />

        {/* Header */}
        <HeaderComponent />

        {/* Child */}
        <View style={styles.scrollWrapper}>
          <ChildComponent />
        </View>

        {/* Fixed Button at Bottom */}
        <SafeAreaView edges={['bottom']} style={styles.buttonSafeArea}>
          {withButton ? (
            <View style={styles.fixedButtonContainer}>
              <Button onPress={onButtonPress} title={buttonTitle} />
            </View>
          ) : null}

          {canRenderBottomSheet ? (
            <View style={styles.fixedButtonContainer}>
              <Button
                onPress={handlePresentModalPress}
                title={bottomSheetTriggerLabel ?? 'Show Details'}
              />
            </View>
          ) : null}
        </SafeAreaView>
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
    root: {
      flex: 1,
    },
    container: {
      ...Layout.flex,
      ...Colors.background,
      flex: 1,
    },
    headerContainer: {
      ...Spacing.px4,
      ...Spacing.py6,
      ...Spacing.pb3,
      ...Layout.flexRow,
      ...Layout.alignCenter,
    },
    scrollWrapper: {
      flex: 1,
    },
    scrollContainer: {
      flexGrow: 1,
      ...Spacing.px4,
      paddingBottom: scaleVertical(100),
    },
    screenHeadingContainer: {
      ...Layout.justifyCenter,
      ...Spacing.py5,
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
      flexGrow: 1,
      ...Spacing.pt3,
      ...Colors.white,
    },
    buttonContainer: {
      ...Layout.justifyStart,
      ...Spacing.bottom2,
    },
    buttonSafeArea: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Colors.background,
    },
    fixedButtonContainer: {
      ...Spacing.px4,
      ...Spacing.py0,
      ...Colors.background,
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
