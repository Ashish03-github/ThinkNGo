import {
  Text,
  StyleProp,
  TextStyle,
  StyleSheet,
  TextProps as RNTextProps,
} from 'react-native';
import React, { ReactNode } from 'react';
import { scaleVertical } from '../../theme/scale';
import { RootTheme } from '../../theme';
import { useTheme } from '../hooks';

type TextType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle'
  | 'regular'
  | 'body'
  | 'caption'
  | 'button';

type FontWeightOption = 'regular' | 'medium' | 'semiBold' | 'bold';

type AppTextProps = RNTextProps & {
  type?: TextType | 'custom';
  weight?: FontWeightOption;
  customStyle?: StyleProp<TextStyle>;
  children?: ReactNode;
  style?: StyleProp<TextStyle>;
};

const DEFAULT_WEIGHTS: Record<TextType, FontWeightOption> = {
  h1: 'bold',
  h2: 'semiBold',
  h3: 'semiBold',
  h4: 'medium',
  h5: 'medium',
  h6: 'regular',
  subtitle: 'medium',
  regular: 'regular',
  body: 'regular',
  caption: 'regular',
  button: 'semiBold',
};

const AppText: React.FC<AppTextProps> = ({
  type = 'regular',
  weight,
  customStyle,
  children,
  style,
  ...restProps
}) => {
  const { Colors, Fonts } = useTheme();
  const styles = React.useMemo(
    () => stylesFn({ Colors, Fonts }),
    [Colors, Fonts],
  );

  const resolvedType: TextType =
    type === 'custom' ? 'regular' : type ?? 'regular';
  const baseStyle = styles.base[resolvedType] ?? styles.base.regular;
  const resolvedWeight: FontWeightOption =
    weight ??
    (type === 'custom'
      ? 'regular'
      : DEFAULT_WEIGHTS[resolvedType] ?? 'regular');
  const weightStyle = styles.weight[resolvedWeight];

  return (
    <Text
      style={[
        baseStyle,
        weightStyle,
        type === 'custom' ? customStyle : undefined,
        style,
      ]}
      {...restProps}
    >
      {children}
    </Text>
  );
};

const stylesFn = ({ Colors, Fonts }: Pick<RootTheme, 'Colors' | 'Fonts'>) => {
  const base = StyleSheet.create({
    h1: {
      ...Fonts.sz24,
      ...Colors.textBlack,
      lineHeight: scaleVertical(36),
    },
    h2: {
      ...Fonts.sz24,
      ...Colors.textBlack,
      lineHeight: scaleVertical(36),
    },
    h3: {
      ...Fonts.sz22,
      ...Colors.textBlack,
      lineHeight: scaleVertical(33),
    },
    h4: {
      ...Fonts.sz22,
      ...Colors.textBlack,
      lineHeight: scaleVertical(33),
    },
    h5: {
      ...Fonts.sz20,
      ...Colors.textBlack,
      lineHeight: scaleVertical(30),
    },
    h6: {
      ...Fonts.sz20,
      ...Colors.textBlack,
      lineHeight: scaleVertical(30),
    },
    subtitle: {
      ...Fonts.sz18,
      ...Colors.textBlack,
      lineHeight: scaleVertical(27),
    },
    regular: {
      ...Fonts.sz14,
      ...Colors.textSecondary,
      lineHeight: scaleVertical(18),
    },
    body: {
      ...Fonts.sz16,
      ...Colors.textBlack,
      lineHeight: scaleVertical(24),
    },
    caption: {
      ...Fonts.sz12,
      ...Colors.textSecondary,
      lineHeight: scaleVertical(18),
    },
    button: {
      ...Fonts.sz14,
      ...Colors.textPrimary,
      lineHeight: scaleVertical(21),
      textTransform: 'uppercase',
    },
  });

  const weight = StyleSheet.create({
    regular: {
      ...Fonts.font400,
    },
    medium: {
      ...Fonts.font500,
    },
    semiBold: {
      ...Fonts.font600,
    },
    bold: {
      ...Fonts.font700,
    },
  });

  return { base, weight };
};
export default AppText;
