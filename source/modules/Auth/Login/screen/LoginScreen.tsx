import { View, StyleSheet, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { RootTheme } from '../../../../theme';
import { useTheme } from '../../../../common/hooks';
import { Content, Text } from '../../../../common/components';
import { scale } from '../../../../theme/scale';
import LoginComponent from '../components/LoginComponent';
import LoginBackgroundComponent from '../components/LoginBackgroundComponent';
import LoginHeader from '../components/LoginHeader';

const LoginScreen = () => {
  const [checked, setChecked] = useState(false);
  const { Colors, Layout, Spacing, Fonts } = useTheme();
  const styles = React.useMemo(
    () => stylesFn({ Colors, Layout, Fonts, Spacing }),
    [Colors, Layout],
  );

  const onRadioButtonPress = () => {
    setChecked(!checked);
  };

  return (
    <Content disableBackButton={true}>
      <View style={styles.container}>
        <LoginHeader
          heading="Hey! Welcome back"
          subHeading="Sign In to your account"
        />
        <LoginComponent
          checked={checked}
          onTermsAndConditonPress={onRadioButtonPress}
          onContinuePress={() => console.log('continue')}
          onContinueWithGooglePress={() => console.log('continue with google')}
        />
        <LoginBackgroundComponent />
      </View>
    </Content>
  );
};

const stylesFn = ({ Colors, Layout, Fonts, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      ...Layout.flex,
      ...Spacing.mt16,
    },
  });

export default LoginScreen;
