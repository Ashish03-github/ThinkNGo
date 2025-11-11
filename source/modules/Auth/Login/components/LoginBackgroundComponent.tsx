import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import { SvgIcon } from '../../../../common/components';
import { scale, scaleVertical } from '../../../../theme/scale';
import { RootTheme } from '../../../../theme';
import { useTheme } from '../../../../common/hooks';

const LoginBackgroundComponent = () => {
  const { Colors, Layout, Spacing, Fonts } = useTheme();
  const styles = React.useMemo(
    () => stylesFn({ Colors, Layout, Fonts, Spacing }),
    [Colors, Layout],
  );
  return (
    <ImageBackground style={styles.imageContainer}>
      <SvgIcon name="loginBackground" height={scaleVertical(300)} />
    </ImageBackground>
  );
};

const stylesFn = ({ Colors, Layout, Fonts, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      ...Layout.flex,
    },
    loginContainer: {
      flex: 0.5,
      ...Layout.justifyCenter,
      //   ...Colors.primary,
    },
    imageContainer: {
      flex: 0.5,
      //   ...Colors.red,
      ...Layout.justifyEnd,
      marginHorizontal: scale(-16),
      opacity: 0.3,
    },
    privacyTextContainer: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
    },
  });

export default LoginBackgroundComponent;
