import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { FormInput, SvgIcon } from '../../../common/components';
import { scale } from '../../../theme/scale';
import { RootTheme } from '../../../theme';
import { useTheme } from '../../../common/hooks';

const FamilyMembersList = () => {
  const { Colors, Layout, Spacing, Fonts } = useTheme();
  const styles = React.useMemo(
    () => stylesFn({ Colors, Fonts, Layout, Spacing }),
    [Colors, Layout, Fonts, Spacing],
  );
  return (
    <View style={styles.container}>
      <FormInput label="" placeholder="" type="Family-Details-Field" />
      <FormInput label="" placeholder="" type="Family-Details-Field" />
      <FormInput
        label=""
        isEndField={true}
        placeholder=""
        type="Family-Details-Field"
      />

      <TouchableOpacity activeOpacity={0.8} style={styles.addCircularButton}>
        <SvgIcon name="plus" width={scale(60)} height={scale(60)} />
      </TouchableOpacity>
    </View>
  );
};

const stylesFn = ({ Colors, Fonts, Layout, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      ...Layout.flex,
    },
    addCircularButton: {
      //   width: scale(60),
      //   height: scale(60),
      ...Layout.center,
      //   ...Colors.primary,
      //   borderRadius: scale(60),
      ...Layout.absolute,
      ...Spacing.bottom0,
      ...Spacing.right0,
    },
  });

export default FamilyMembersList;
