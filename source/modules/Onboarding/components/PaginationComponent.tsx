import { View, StyleSheet } from 'react-native';
import React from 'react';
import { RootTheme } from '../../../theme';
import { useTheme } from '../../../common/hooks';
import { SvgIcon, Text } from '../../../common/components';
import { scale, SCREEN_WIDTH } from '../../../theme/scale';

type PaginationComponentProps = {
  text: string;
  selectedIndex?: number;
  iconName: 'pagination1' | 'pagination2' | 'pagination3';
};

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  text,
  iconName,
  selectedIndex = 0,
}) => {
  const { Colors, Layout, Spacing, Fonts } = useTheme();

  const styles = React.useMemo(
    () => stylesFn({ Colors, Fonts, Layout, Spacing }),
    [Colors, Layout, Fonts, Spacing],
  );

  return (
    <View style={styles.container}>
      <SvgIcon name={iconName} width={scale(280)} height={scale(280)} />

      <Text type="h5" weight="semiBold" style={styles.paginationTextStyle}>
        {text}
      </Text>

      <View style={styles.paginationIndicatorContainer}>
        <View
          style={
            selectedIndex === 0
              ? styles.paginationActiveItem
              : styles.paginationInactiveItem
          }
        />
        <View
          style={
            selectedIndex === 1
              ? styles.paginationActiveItem
              : styles.paginationInactiveItem
          }
        />
        <View
          style={
            selectedIndex === 2
              ? styles.paginationActiveItem
              : styles.paginationInactiveItem
          }
        />
      </View>
    </View>
  );
};

const stylesFn = ({ Colors, Fonts, Layout, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      ...Layout.flex,
      width: SCREEN_WIDTH,
      //   ...Spacing.px6,
      //   ...Layout.flex,
      ...Layout.center,
      //   ...Colors.red,
    },
    paginationTextStyle: {
      textAlign: 'center',
      marginVertical: scale(30),
    },
    paginationIndicatorContainer: {
      ...Layout.flexRow,
      marginTop: scale(50),
    },
    paginationInactiveItem: {
      width: scale(8),
      height: scale(8),
      borderRadius: scale(8),
      marginHorizontal: scale(2),
      backgroundColor: Colors.lightGrayPure,
    },
    paginationActiveItem: {
      width: scale(30),
      height: scale(8),
      ...Colors.primary,
      borderRadius: scale(8),
      marginHorizontal: scale(2),
    },
  });

export default PaginationComponent;
