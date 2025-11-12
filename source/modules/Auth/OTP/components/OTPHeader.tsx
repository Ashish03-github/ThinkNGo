import { View, StyleSheet } from 'react-native';
import React from 'react';
import { SvgIcon, Text } from '../../../../common/components';
import { scale } from '../../../../theme/scale';
import { RootTheme } from '../../../../theme';
import { useTheme } from '../../../../common/hooks';

type OTPHeaderProps = {
  phoneNumber?: string;
};

const OTPHeader: React.FC<OTPHeaderProps> = ({ phoneNumber = '+91 84903 04800' }) => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn({ Colors, Layout, Spacing, Fonts }),
    [Colors, Fonts, Layout, Spacing],
  );

  return (
    <View style={styles.container}>
      <SvgIcon name="otp" width={scale(150)} height={scale(150)} />
      <Text type="h1" weight="semiBold">
        OTP Verification
      </Text>
      <Text
        type="regular"
        weight="medium"
        style={styles.description}
      >
        We sent an SMS with a 6-digit code to your {'\n'} {phoneNumber}.
        Please enter it so we {'\n'} can be sure that this email belongs{' '}
        {'\n'} to you.
      </Text>
    </View>
  );
};

const stylesFn = ({ Colors, Fonts, Layout, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    description: {
      textAlign: 'center',
      marginTop: scale(20),
    },
  });

export default OTPHeader;

