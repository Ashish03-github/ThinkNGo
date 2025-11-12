import { View, StyleSheet } from 'react-native';
import React from 'react';
import { RootTheme } from '../../../theme';
import { useTheme } from '../../../common/hooks';
import { Button } from '../../../common/components';
import { scale } from '../../../theme/scale';

type OnboardingActionsProps = {
  onSignIn?: () => void;
  onSignUp?: () => void;
};

const OnboardingActions: React.FC<OnboardingActionsProps> = ({
  onSignIn,
  onSignUp,
}) => {
  const { Layout, Spacing } = useTheme();

  const styles = React.useMemo(
    () => stylesFn({ Layout, Spacing }),
    [Layout, Spacing],
  );

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={onSignIn} />
      <Button isBordered title="Sign Up" onPress={onSignUp} style={styles.buttonStyle} />
    </View>
  );
};

const stylesFn = ({ Layout, Spacing }: Pick<RootTheme, 'Layout' | 'Spacing'>) =>
  StyleSheet.create({
    container: {
      flex: 0.2,
      ...Spacing.p4,
      ...Spacing.pb6,
      ...Layout.justifyEnd,
      ...Layout.alignCenter,
    },
    buttonStyle: {
      marginTop: scale(14),
    },
  });

export default OnboardingActions;





