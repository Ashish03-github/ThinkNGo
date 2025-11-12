import {
  View,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import { RootTheme } from '../../../../theme';
import { scale } from '../../../../theme/scale';
import { Button, Input, SvgIcon, Text } from '../../../../common/components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../../../common/hooks';
import LoginActions from './LoginActions';

type LoginComponentProps = {
  checked?: boolean;
  onTermsAndConditonPress?: (event: GestureResponderEvent) => void;
  onContinuePress?: (event: GestureResponderEvent) => void;
  onContinueWithGooglePress?: (event: GestureResponderEvent) => void;
};
const LoginComponent: React.FC<LoginComponentProps> = ({
  checked,
  onContinuePress,
  onTermsAndConditonPress,
  onContinueWithGooglePress,
}) => {
  const { Colors, Layout, Spacing, Fonts } = useTheme();
  const styles = React.useMemo(
    () => stylesFn({ Colors, Layout, Fonts, Spacing }),
    [Colors, Layout],
  );
  return (
    <View style={styles.loginContainer}>
      <Input isPhone={true} placeholder="Enter mobile number " />

      <View style={styles.privacyTextContainer}>
        <Ionicons
          name={checked ? 'radio-button-on-sharp' : 'radio-button-off-sharp'}
          size={scale(20)}
          onPress={onTermsAndConditonPress}
          color={Colors.primaryPure}
        />
        <Text style={styles.termsAndConditionText} type="caption">
          I accept all Terms & Conditions and Privacy Policy
        </Text>
      </View>

      <LoginActions
        onContinuePress={onContinuePress}
        onContinueWithGooglePress={onContinueWithGooglePress}
      />
    </View>
  );
};

const stylesFn = ({ Colors, Layout, Fonts, Spacing }: RootTheme) =>
  StyleSheet.create({
    loginContainer: {
      minHeight: scale(300),
      ...Spacing.mt4,
    },
    privacyTextContainer: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
    },
    termsAndConditionText: {
      ...Spacing.my3,
      ...Spacing.ml2,
      ...Colors.textBlack,
    },
  });

export default LoginComponent;
