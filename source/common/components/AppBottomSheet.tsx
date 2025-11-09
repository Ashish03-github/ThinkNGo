import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  StyleProp,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  useWindowDimensions,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from '../hooks';
import { scale, scaleVertical } from '../../theme/scale';
import { RootTheme } from '../../theme';

type AppBottomSheetProps = {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
  /**
   * Height that the sheet should occupy when fully expanded.
   * Defaults to half the device height.
   */
  snapPoint?: number | `${number}%`;
  /**
   * Allow dismissing the sheet by tapping the backdrop.
   */
  enableBackdropDismiss?: boolean;
  /**
   * Animation duration for show/hide transitions.
   */
  animationDuration?: number;
  /**
   * Optional style override for the sheet container.
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Optional style override for the sheet content wrapper.
   */
  contentContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Optional style override for the backdrop.
   */
  backdropStyle?: StyleProp<ViewStyle>;
};

const DEFAULT_DURATION = 300;
const OPEN_DELAY = 300;

const parseSnapPointValue = (
  value: AppBottomSheetProps['snapPoint'],
  windowHeight: number,
) => {
  if (typeof value === 'string') {
    const trimmed = value.trim();

    if (trimmed.endsWith('%')) {
      const percentageValue = parseFloat(trimmed.slice(0, -1));
      if (Number.isFinite(percentageValue)) {
        return percentageValue / 100;
      }
      return windowHeight * 0.5;
    }

    const numericValue = parseFloat(trimmed);
    if (Number.isFinite(numericValue)) {
      return numericValue;
    }

    return windowHeight * 0.5;
  }

  if (typeof value === 'number') {
    return value;
  }

  return Math.round(windowHeight * 0.5);
};

const AppBottomSheet: React.FC<AppBottomSheetProps> = ({
  isVisible,
  onClose,
  children,
  snapPoint = Math.round(Dimensions.get('window').height * 0.5),
  enableBackdropDismiss = true,
  animationDuration = DEFAULT_DURATION,
  containerStyle,
  contentContainerStyle,
  backdropStyle,
}) => {
  const { Colors, Layout, Spacing } = useTheme();
  const [shouldRender, setShouldRender] = useState(isVisible);
  const { height: windowHeight } = useWindowDimensions();

  const sheetSnapPoint = useMemo(() => {
    const normalizedSnapPoint = parseSnapPointValue(snapPoint, windowHeight);

    if (normalizedSnapPoint <= 0) {
      return Math.round(windowHeight * 0.5);
    }
    if (normalizedSnapPoint > 0 && normalizedSnapPoint <= 1) {
      return Math.round(windowHeight * normalizedSnapPoint);
    }
    if (normalizedSnapPoint > windowHeight) {
      return windowHeight;
    }

    return normalizedSnapPoint;
  }, [snapPoint, windowHeight]);

  const translateY = useSharedValue(sheetSnapPoint);
  const backdropOpacity = useSharedValue(0);

  const styles = useMemo(
    () =>
      stylesFn({
        Colors,
        Layout,
        Spacing,
        sheetSnapPoint,
      }),
    [Colors, Layout, Spacing, sheetSnapPoint],
  );

  useEffect(() => {
    if (isVisible) {
      translateY.value = sheetSnapPoint;
      backdropOpacity.value = 0;
      setShouldRender(true);
      translateY.value = withDelay(
        OPEN_DELAY,
        withTiming(0, {
          duration: animationDuration,
          easing: Easing.out(Easing.quad),
        }),
      );
      backdropOpacity.value = withDelay(
        OPEN_DELAY,
        withTiming(1, {
          duration: animationDuration,
          easing: Easing.out(Easing.quad),
        }),
      );
    } else {
      backdropOpacity.value = withTiming(0, {
        duration: animationDuration,
        easing: Easing.in(Easing.quad),
      });
      translateY.value = withTiming(
        sheetSnapPoint,
        {
          duration: animationDuration,
          easing: Easing.in(Easing.quad),
        },
        finished => {
          if (finished) {
            runOnJS(setShouldRender)(false);
          }
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, animationDuration, sheetSnapPoint]);

  useEffect(() => {
    if (!isVisible) {
      translateY.value = sheetSnapPoint;
    }
  }, [sheetSnapPoint]);

  const animatedSheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const animatedBackdropStyle = useAnimatedStyle(() => ({
    opacity: backdropOpacity.value,
  }));

  const handleDismiss = () => {
    if (!enableBackdropDismiss) {
      return;
    }
    onClose();
  };

  const panGesture = useMemo(() => {
    return Gesture.Pan()
      .maxPointers(1)
      .onUpdate(event => {
        'worklet';
        const nextValue = Math.max(
          0,
          Math.min(event.translationY, sheetSnapPoint),
        );

        translateY.value = nextValue;

        if (sheetSnapPoint > 0) {
          const progress = 1 - Math.min(1, nextValue / sheetSnapPoint);
          backdropOpacity.value = progress;
        }
      })
      .onEnd(event => {
        'worklet';
        const isClosing =
          event.velocityY > 800 || translateY.value > sheetSnapPoint / 2;

        if (isClosing) {
          runOnJS(onClose)();
          return;
        }

        translateY.value = withTiming(0, { duration: animationDuration });
        backdropOpacity.value = withTiming(1, { duration: animationDuration });
      });
  }, [animationDuration, backdropOpacity, onClose, sheetSnapPoint, translateY]);

  if (!shouldRender) {
    return null;
  }

  return (
    <View pointerEvents="box-none" style={styles.container}>
      <TouchableWithoutFeedback
        disabled={!enableBackdropDismiss}
        onPress={handleDismiss}
      >
        <Animated.View
          pointerEvents={isVisible ? 'auto' : 'none'}
          style={[styles.backdrop, animatedBackdropStyle, backdropStyle]}
        />
      </TouchableWithoutFeedback>

      <GestureDetector gesture={panGesture}>
        <Animated.View
          style={[styles.sheetContainer, animatedSheetStyle, containerStyle]}
        >
          <View style={styles.handle} />
          <View style={[styles.contentWrapper, contentContainerStyle]}>
            {children}
          </View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default AppBottomSheet;

type BottomSheetStyleParams = Pick<
  RootTheme,
  'Colors' | 'Layout' | 'Spacing'
> & {
  sheetSnapPoint: number;
};

const stylesFn = ({
  Colors,
  Layout,
  Spacing,
  sheetSnapPoint,
}: BottomSheetStyleParams) =>
  StyleSheet.create({
    container: {
      ...Layout.absoluteFill,
      ...Layout.justifyEnd,
    },
    backdrop: {
      ...Layout.absoluteFill,
      backgroundColor: 'rgba(0,0,0,0.45)',
    },
    sheetContainer: {
      ...Layout.wFull,
      backgroundColor: Colors.whitePure,
      borderTopLeftRadius: scale(24),
      borderTopRightRadius: scale(24),
      height: sheetSnapPoint,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 8,
      overflow: 'hidden',
    },
    handle: {
      ...Layout.selfCenter,
      backgroundColor: 'rgba(0,0,0,0.15)',
      borderRadius: scale(8),
      height: scaleVertical(4),
      marginVertical: scaleVertical(12),
      width: scale(48),
    },
    contentWrapper: {
      ...Layout.flex,
      ...Spacing.px3,
      ...Spacing.pb3,
    },
  });
