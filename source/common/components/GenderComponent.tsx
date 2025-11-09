import React, { useMemo, useState, useCallback } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { scale, scaleVertical, SCREEN_WIDTH } from '../../theme/scale';
import { RootTheme } from '../../theme';
import { useTheme } from '../hooks';
import { Text } from '../components';

const genderOptions = [
  { id: 0, label: 'Male', image: require('../../../assets/images/Male.png') },
  {
    id: 1,
    label: 'Female',
    image: require('../../../assets/images/Female.png'),
  },
  {
    id: 2,
    label: 'Other',
    image: require('../../../assets/images/Female.png'),
  },
];

const GenderComponent = () => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const [selectedGender, setSelectedGender] = useState<number>(0);

  const styles = useMemo(
    () => createStyles({ Colors, Layout, Spacing, Fonts }),
    [Colors, Fonts, Layout, Spacing],
  );

  const handleSelect = useCallback((id: number) => setSelectedGender(id), []);

  return (
    <View style={styles.container}>
      <Text type="regular" weight="medium" style={{ color: Colors.blackPure }}>
        Gender
      </Text>

      <View style={styles.genderItemsContainer}>
        {genderOptions.map(({ id, label, image }) => {
          const isSelected = selectedGender === id;
          return (
            <TouchableOpacity
              key={id}
              activeOpacity={0.8}
              onPress={() => handleSelect(id)}
              style={
                isSelected
                  ? styles.genderSelectedItem
                  : styles.genderNonSelectedItem
              }
            >
              <View style={styles.iconContainer}>
                <Image source={image} style={styles.imageStyle} />
              </View>

              <Text
                type="caption"
                weight="medium"
                style={
                  isSelected
                    ? styles.genderSelectedText
                    : styles.genderNonSelectedText
                }
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const createStyles = ({ Colors, Fonts, Layout, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      ...Spacing.my3,
      minHeight: scaleVertical(70),
    },
    genderItemsContainer: {
      ...Layout.flexRow,
      ...Spacing.mt3,
    },
    genderSelectedItem: {
      width: SCREEN_WIDTH * 0.28,
      ...Spacing.py2,
      ...Spacing.mr4,
      ...Layout.roundedMd,
      ...Colors.primary,
      ...Layout.flexRow,
      ...Layout.center,
    },
    genderNonSelectedItem: {
      width: SCREEN_WIDTH * 0.28,
      ...Spacing.py2,
      ...Spacing.mr4,
      ...Layout.roundedLg,
      ...Layout.flexRow,
      ...Layout.center,
      borderWidth: scale(0.7),
      borderColor: Colors.lightGrayPure,
    },
    iconContainer: {
      width: scale(26),
      height: scale(26),
      borderRadius: scale(26),
      ...Layout.center,
      ...Colors.primaryLight1,
    },
    imageStyle: {
      width: scale(16),
      height: scale(16),
    },
    genderSelectedText: {
      ...Spacing.ml3,
      ...Fonts.sz12,
      ...Colors.textWhite,
    },
    genderNonSelectedText: {
      ...Spacing.ml3,
      ...Fonts.sz12,
      ...Colors.textSecondary,
    },
  });

export default GenderComponent;
