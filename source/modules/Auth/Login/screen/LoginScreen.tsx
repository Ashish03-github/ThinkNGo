import { View, StyleSheet, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { RootTheme } from '../../../../theme';
import { useTheme } from '../../../../common/hooks';
import { Content, SvgIcon, Text } from '../../../../common/components';
import { scale, scaleVertical } from '../../../../theme/scale';
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
        <View style={styles.contentWrapper}>
          <LoginHeader
            heading="Hey! Welcome back"
            subHeading="Sign In to your account"
          />
          <LoginComponent
            checked={checked}
            onTermsAndConditonPress={onRadioButtonPress}
            onContinuePress={() => console.log('continue')}
            onContinueWithGooglePress={() =>
              console.log('continue with google')
            }
          />
        </View>
        <View style={styles.backgroundWrapper}>
          <LoginBackgroundComponent />
        </View>
      </View>
    </Content>
  );
};

const stylesFn = ({ Colors, Layout, Fonts, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      ...Spacing.mt16,
      position: 'relative',
    },
    contentWrapper: {
      zIndex: 1,
      flexGrow: 1,
    },
    backgroundWrapper: {
      position: 'absolute',
      bottom: 0,
      left: scale(-16),
      right: scale(-16),
      zIndex: 0,
      opacity: 0.3,
    },
  });

export default LoginScreen;
