import { FlatList, NativeSyntheticEvent, NativeScrollEvent, StyleSheet } from 'react-native';
import React, { useRef, useState, useCallback } from 'react';
import { RootTheme } from '../../../theme';
import { useTheme } from '../../../common/hooks';
import PaginationComponent from './PaginationComponent';
import { SCREEN_WIDTH } from '../../../theme/scale';
import { ONBOARDING_ITEMS, OnboardingItem } from '../constants/onboardingItems';

type OnboardingCarouselProps = {
  onPageChange?: (index: number) => void;
};

const OnboardingCarousel: React.FC<OnboardingCarouselProps> = ({
  onPageChange,
}) => {
  const { Layout } = useTheme();
  const flatlistRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const styles = React.useMemo(
    () => stylesFn({ Layout }),
    [Layout],
  );

  const handlePageChange = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      onPageChange?.(index);
    },
    [onPageChange],
  );

  const onMomentumScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const pageIndex = Math.round(offsetX / SCREEN_WIDTH);
      const clampedIndex = Math.max(
        0,
        Math.min(pageIndex, ONBOARDING_ITEMS.length - 1),
      );
      handlePageChange(clampedIndex);
    },
    [handlePageChange],
  );

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const pageIndex = Math.round(offsetX / SCREEN_WIDTH);
      const clampedIndex = Math.max(
        0,
        Math.min(pageIndex, ONBOARDING_ITEMS.length - 1),
      );
      handlePageChange(clampedIndex);
    },
    [handlePageChange],
  );

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: SCREEN_WIDTH,
      offset: SCREEN_WIDTH * index,
      index,
    }),
    [],
  );

  const renderItem = useCallback(
    ({ item }: { item: OnboardingItem }) => (
      <PaginationComponent
        text={item.text}
        selectedIndex={currentIndex}
        iconName={item.iconName}
      />
    ),
    [currentIndex],
  );

  const keyExtractor = useCallback(
    (item: OnboardingItem) => `onboarding-${item.id}`,
    [],
  );

  return (
    <FlatList
      ref={flatlistRef}
      horizontal
      pagingEnabled
      bounces={false}
      data={ONBOARDING_ITEMS}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onScroll={onScroll}
      onMomentumScrollEnd={onMomentumScrollEnd}
      scrollEventThrottle={16}
      getItemLayout={getItemLayout}
      decelerationRate="fast"
      snapToAlignment="start"
      snapToInterval={SCREEN_WIDTH}
      removeClippedSubviews={false}
      showsHorizontalScrollIndicator={false}
      disableIntervalMomentum={true}
      contentContainerStyle={styles.flatListContent}
    />
  );
};

const stylesFn = ({ Layout }: Pick<RootTheme, 'Layout'>) =>
  StyleSheet.create({
    flatListContent: {
      // No padding - items must be exactly SCREEN_WIDTH for pagingEnabled to work
    },
  });

export default OnboardingCarousel;


