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
  return <SvgIcon name="loginBackground" height={scaleVertical(300)} />;
};

const stylesFn = ({ Colors, Layout, Fonts, Spacing }: RootTheme) =>
  StyleSheet.create({
    imageContainer: {
      ...Layout.justifyEnd,
      ...Layout.alignCenter,
      width: '100%',
      height: scaleVertical(300),
    },
  });

export default LoginBackgroundComponent;
