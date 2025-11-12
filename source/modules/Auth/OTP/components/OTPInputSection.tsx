import { StyleSheet, View } from 'react-native';
import React from 'react';
import { OtpInput } from 'react-native-otp-entry';
import { RootTheme } from '../../../../theme';
import { useTheme } from '../../../../common/hooks';
import { scale } from '../../../../theme/scale';

type OTPInputSectionProps = {
  onFocus?: () => void;
  onBlur?: () => void;
  onTextChange?: (text: string) => void;
  onFilled?: (text: string) => void;
};

const OTPInputSection: React.FC<OTPInputSectionProps> = ({
  onFocus,
  onBlur,
  onTextChange,
  onFilled,
}) => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn({ Colors, Layout, Spacing, Fonts }),
    [Colors, Fonts, Layout, Spacing],
  );

  return (
    <View style={styles.container}>
      <OtpInput
        numberOfDigits={6}
        autoFocus={true}
        hideStick={true}
        blurOnFilled={true}
        disabled={false}
        type="numeric"
        secureTextEntry={false}
        focusStickBlinkingDuration={500}
        onFocus={onFocus || (() => console.log('Focused'))}
        onBlur={onBlur || (() => console.log('Blurred'))}
        onTextChange={onTextChange || ((text) => console.log(text))}
        onFilled={onFilled || ((text) => console.log(`OTP is ${text}`))}
        theme={{
          containerStyle: styles.otpContainer,
          pinCodeContainerStyle: styles.pinCodeContainer,
          pinCodeTextStyle: styles.pinCodeText,
          focusStickStyle: styles.focusStick,
          focusedPinCodeContainerStyle: styles.activePinCodeContainer,
          placeholderTextStyle: styles.placeholderText,
          filledPinCodeContainerStyle: styles.filledPinCodeContainer,
          disabledPinCodeContainerStyle: styles.disabledPinCodeContainer,
        }}
      />
    </View>
  );
};

const stylesFn = ({ Colors, Fonts, Layout, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    otpContainer: {
      ...Spacing.my10,
    },
    pinCodeContainer: {
      width: scale(50),
      borderWidth: scale(0),
      ...Colors.primaryLight2,
    },
    pinCodeText: {
      ...Fonts.sz20,
      ...Fonts.font500,
      ...Colors.textPrimary,
    },
    focusStick: {},
    activePinCodeContainer: {},
    placeholderText: {},
    filledPinCodeContainer: {},
    disabledPinCodeContainer: {},
  });

export default OTPInputSection;

