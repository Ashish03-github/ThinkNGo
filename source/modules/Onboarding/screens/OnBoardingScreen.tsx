import {
  View,
  Text,
  StyleSheet,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StatusBar,
} from 'react-native';
import React, { useRef, useState, useCallback } from 'react';
import { RootTheme } from '../../../theme';
import { useTheme } from '../../../common/hooks';
import { Button } from '../../../common/components';
import PaginationComponent from '../components/PaginationComponent';
import { scale, SCREEN_WIDTH } from '../../../theme/scale';

const PaginationItems = [
  {
    iconName: 'pagination1',
    text: 'Video consult top doctors \n from the comfort of your \n home.',
    selectedIndex: 0,
  },
  {
    iconName: 'pagination2',
    text: 'find the nearest pharmacy \n carrying your required \n medication.',
    selectedIndex: 1,
  },
  {
    iconName: 'pagination3',
    text: 'Find the best \n laboratory for your needs.',
    selectedIndex: 2,
  },
];

const OnBoardingScreen = () => {
  const { Colors, Layout, Spacing, Fonts } = useTheme();

  const flatlistRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const styles = React.useMemo(
    () => stylesFn({ Colors, Fonts, Layout, Spacing }),
    [Colors, Layout, Fonts, Spacing],
  );

  const onMomentumScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const pageIndex = Math.round(offsetX / SCREEN_WIDTH);
      const clampedIndex = Math.max(
        0,
        Math.min(pageIndex, PaginationItems.length - 1),
      );
      setCurrentIndex(clampedIndex);
    },
    [],
  );

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const pageIndex = Math.round(offsetX / SCREEN_WIDTH);
      const clampedIndex = Math.max(
        0,
        Math.min(pageIndex, PaginationItems.length - 1),
      );
      setCurrentIndex(clampedIndex);
    },
    [],
  );

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: SCREEN_WIDTH,
      offset: SCREEN_WIDTH * index,
      index,
    }),
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.paginationItemsContainer}>
        <FlatList
          horizontal
          pagingEnabled
          bounces={false}
          ref={flatlistRef}
          onScroll={onScroll}
          data={PaginationItems}
          decelerationRate="fast"
          snapToAlignment="start"
          scrollEventThrottle={16}
          getItemLayout={getItemLayout}
          snapToInterval={SCREEN_WIDTH}
          removeClippedSubviews={false}
          showsHorizontalScrollIndicator={false}
          disableIntervalMomentum={true}
          onMomentumScrollEnd={onMomentumScrollEnd}
          contentContainerStyle={styles.flatListContent}
          keyExtractor={(item, index) => `onboarding-${index}`}
          renderItem={({ item }) => (
            <PaginationComponent
              text={item.text}
              selectedIndex={currentIndex}
              iconName={item.iconName}
            />
          )}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Sign In" />
        <Button isBordered title="Sign Up" style={styles.buttonStyle} />
      </View>
    </View>
  );
};
const stylesFn = ({ Colors, Fonts, Layout, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      ...Layout.flex,
      ...Colors.white,
    },
    paginationItemsContainer: {
      flex: 0.8,
      width: '100%',
    },
    flatListContent: {
      // No padding - items must be exactly SCREEN_WIDTH for pagingEnabled to work
    },
    buttonsContainer: {
      flex: 0.2,
      ...Spacing.p4,
      ...Spacing.pb6,
      ...Layout.justifyEnd,
      ...Layout.alignCenter,
    },
    buttonStyle: {
      marginTop: scale(14),
    },
  });

export default OnBoardingScreen;
