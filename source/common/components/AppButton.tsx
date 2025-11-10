import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import { RootTheme } from '../../theme';
import useTheme from '../hooks/useTheme';
import { scale } from '../../theme/scale';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  icon?: string | React.JSX.Element;
  isBordered?: boolean;
}
const AppButton: React.FC<ButtonProps> = ({
  isBordered = false,
  title = 'Continue',
  icon,
  style,
  ...touchableProps
}) => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  let styles = React.useMemo(
    () => stylesFn({ Colors, Layout, Spacing, Fonts }),
    [Colors, Fonts, Layout, Spacing],
  );

  const renderIcon = () => {
    if (!icon) return null;

    if (React.isValidElement(icon)) return icon;

    // if (typeof icon === 'string') {
    //   return (
    //     <Ionicons
    //       name={icon}
    //       size={iconSize}
    //       color={iconColor || (isBordered ? Colors.primaryPure : '#fff')}
    //       style={{ marginRight: scale(8) }}
    //     />
    //   );
    // }

    return null;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[isBordered ? styles.borderedContainer : styles.container, style]}
      {...touchableProps}
    >
      <View style={{ ...Layout.flexRow, ...Layout.center }}>
        {renderIcon()}

        <Text
          style={[
            styles.titleStyle,
            isBordered
              ? { color: Colors.primaryPure }
              : { ...Colors.textWhite },
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const stylesFn = ({ Colors, Fonts, Layout, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      ...Layout.wFull,
      // ...Spacing.py3,
      minHeight: scale(48),
      ...Colors.primary,
      ...Layout.center,
      ...Spacing.my1,
      ...Layout.roundedLg,
    },
    borderedContainer: {
      ...Layout.wFull,
      // ...Spacing.py3,
      minHeight: scale(48),
      ...Layout.center,
      ...Colors.white,
      ...Spacing.my1,
      ...Layout.roundedLg,
      borderWidth: scale(1),
      borderColor: Colors.primaryPure,
    },
    titleStyle: {
      ...Fonts.sz14,
      ...Fonts.font500,
      ...Colors.textWhite,
    },
  });

export default AppButton;
