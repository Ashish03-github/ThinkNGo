import { View, Text, GestureResponderEvent } from 'react-native';
import React from 'react';
import { Button, SvgIcon } from '../../../../common/components';
import { scale } from '../../../../theme/scale';
import { useTheme } from '../../../../common/hooks';

type LoginActionsPress = {
  onContinuePress?: ((event: GestureResponderEvent) => void) | undefined;
  onContinueWithGooglePress?:
    | ((event: GestureResponderEvent) => void)
    | undefined;
};
const LoginActions: React.FC<LoginActionsPress> = ({
  onContinuePress,
  onContinueWithGooglePress,
}) => {
  const { Spacing } = useTheme();
  return (
    <>
      <Button
        title="Continue"
        onPress={onContinuePress}
        style={{ ...Spacing.mt4 }}
      />

      <Button
        isBordered
        style={{ ...Spacing.mt4 }}
        title="Continue with Google"
        onPress={onContinueWithGooglePress}
        icon={<SvgIcon name="google" width={scale(20)} height={scale(20)} />}
      />
    </>
  );
};

export default LoginActions;
