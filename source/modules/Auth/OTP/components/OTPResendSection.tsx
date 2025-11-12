import React from 'react';
import { Text } from '../../../../common/components';
import { useTheme } from '../../../../common/hooks';
import { RootTheme } from '../../../../theme';

type OTPResendSectionProps = {
  countdown?: string;
  onResendPress?: () => void;
};

const OTPResendSection: React.FC<OTPResendSectionProps> = ({
  countdown = '00:59',
  onResendPress,
}) => {
  const { Colors, Spacing } = useTheme();

  return (
    <>
      <Text type="regular" weight="medium">
        Didn't recieve the OTP?{' '}
        <Text
          weight="semiBold"
          style={{ ...Colors.textRed }}
          onPress={onResendPress}
        >
          Resend
        </Text>{' '}
      </Text>
      <Text type="regular" style={{ ...Spacing.my2 }}>
        Your code resend in{' '}
        <Text weight="semiBold" style={{ ...Colors.textRed }}>
          {countdown}
        </Text>
      </Text>
    </>
  );
};

export default OTPResendSection;

