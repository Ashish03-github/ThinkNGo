import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
} from 'react-native';
import React, { FC } from 'react';
import { scale, scaleVertical } from '../../theme/scale';
import { RootTheme, spacing } from '../../theme';
import { useTheme } from '../hooks';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface InputProps extends TextInputProps {
  isPhone?: boolean;
  isDropdown?: boolean;
}
const AppInput: FC<InputProps> = ({ isPhone, isDropdown, ...props }) => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  let styles = React.useMemo(
    () => stylesFn({ Colors, Layout, Spacing, Fonts }),
    [Colors, Fonts, Layout, Spacing],
  );
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {isPhone ? (
          <View style={styles.phoneCodeContainer}>
            <Text style={styles.mobileCodeText}>+ 91</Text>
          </View>
        ) : null}
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter something here ..."
          placeholderTextColor={Colors.textSecondary.color}
          inputMode={isPhone ? 'numeric' : 'email'}
          {...props}
        />
      </View>
      <View style={styles.dropdownIconContainer}>
        {isDropdown ? <AntDesign name="down" size={scale(12)} /> : null}
      </View>
    </View>
  );
};

const stylesFn = ({ Colors, Fonts, Layout, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      ...Spacing.pl4,
      ...Spacing.my2,
      height: scale(50),
      ...Layout.roundedLg,
      ...Layout.fullWidth,
      borderWidth: scale(1),
      borderColor: Colors.lightGray,
      ...Layout.flexRow,
      ...Spacing.pt1,
    },
    inputContainer: {
      flex: 0.9,
      ...Layout.flexRow,
      ...Layout.alignCenter,
    },
    inputStyle: {
      ...Fonts.sz14,
      ...Fonts.font400,
      ...Colors.textBlack,
    },
    phoneCodeContainer: {
      ...Spacing.pr1,
      ...Spacing.mr1,
      ...Layout.center,
      width: scale(30),
      borderRightWidth: scale(0.8),
      height: scaleVertical(25),
      borderColor: Colors.lightGray,
    },
    mobileCodeText: {
      ...Fonts.font400,
      ...Fonts.sz13,
      ...Colors.textPrimary,
    },
    dropdownIconContainer: {
      flex: 0.1,
      ...Layout.justifyCenter,
    },
  });

export default AppInput;
