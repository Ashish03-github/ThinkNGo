import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text, Button, SvgIcon } from '../../../common/components';
import { scale, scaleVertical, SCREEN_WIDTH } from '../../../theme/scale';
import { RootTheme } from '../../../theme';
import { useTheme } from '../../../common/hooks';

type EmptyMemberProps = {
  onAddFamilyMemberPress: () => void;
  onAddMinorPress: () => void;
};
const EmptyMember: React.FC<EmptyMemberProps> = ({
  onAddMinorPress,
  onAddFamilyMemberPress,
}) => {
  const { Colors, Layout, Spacing, Fonts } = useTheme();

  const styles = React.useMemo(
    () => stylesFn({ Colors, Fonts, Layout, Spacing }),
    [Colors, Layout, Fonts, Spacing],
  );
  return (
    <View style={styles.container}>
      <SvgIcon name="family" width={scale(140)} height={scale(140)} />
      <Text type="subtitle" weight="semiBold" style={styles.heading}>
        No member added yet.
      </Text>
      <Text type="regular" style={styles.subHeading}>
        Would you like to add one now?
      </Text>

      <Button
        title="+ Add New Member"
        style={styles.addFamilyButton}
        onPress={onAddFamilyMemberPress}
      />

      <Button
        isBordered
        title="+ Add New Minor"
        onPress={onAddMinorPress}
        style={styles.addMinorButton}
      />
    </View>
  );
};

const stylesFn = ({ Colors, Fonts, Layout, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      ...Layout.flex,
      ...Layout.center,
    },
    heading: {
      ...Spacing.mt3,
    },
    subHeading: {
      ...Spacing.mt1,
    },
    addFamilyButton: {
      ...Spacing.mt5,
      width: SCREEN_WIDTH * 0.5,
      minHeight: scaleVertical(40),
    },
    addMinorButton: {
      ...Spacing.mt3,
      width: SCREEN_WIDTH * 0.5,
      minHeight: scaleVertical(40),
    },
  });

export default EmptyMember;
