import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
  KeyboardAvoidingView,
  Platform,
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
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
    </KeyboardAvoidingView>
  );
};

const stylesFn = ({ Colors, Fonts, Layout, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      ...Spacing.pl4,
      ...Spacing.my3,
      height: scale(55),
      ...Layout.roundedLg,
      ...Layout.fullWidth,
      borderWidth: scale(1),
      borderColor: Colors.lightGrayPure,
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
      // lineHeight: scaleVertical(18),
    },
    phoneCodeContainer: {
      ...Spacing.pr1,
      ...Spacing.mr1,
      ...Layout.center,
      width: scale(35),
      borderRightWidth: scale(0.8),
      height: scaleVertical(25),
      borderColor: Colors.lightGrayPure,
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
