import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { GenderComponent, Input } from '../../../common/components';
import { scaleVertical } from '../../../theme/scale';
import { RootTheme } from '../../../theme';
import { useTheme } from '../../../common/hooks';

type FamilyDetailsFormProps = {
  isForMinor?: boolean;
};
const FamilyDetailsForm: React.FC<FamilyDetailsFormProps> = ({
  isForMinor,
}) => {
  const { Colors, Layout, Spacing, Fonts } = useTheme();
  const styles = React.useMemo(
    () => stylesFn({ Colors, Fonts, Layout, Spacing }),
    [Colors, Layout, Fonts, Spacing],
  );
  return (
    <View style={styles.container}>
      <View style={styles.inputRowContainer}>
        <Input
          placeholder="First Name"
          containerStyle={styles.rowInputContainer}
        />
        <Input
          placeholder="Last Name"
          containerStyle={styles.rowInputContainer}
        />
      </View>

      <Input
        isDropdown
        placeholder="Relation"
        containerStyle={styles.inputContainer}
      />

      {!isForMinor ? (
        <Input placeholder="Email" containerStyle={styles.inputContainer} />
      ) : null}

      {!isForMinor ? (
        <Input
          isPhone
          placeholder="Mobile Number"
          containerStyle={styles.inputContainer}
        />
      ) : null}

      <Input
        placeholder="Date of Birth"
        containerStyle={styles.inputContainer}
      />

      <Input
        isDropdown
        placeholder="Blood Group"
        containerStyle={styles.inputContainer}
      />

      <GenderComponent />
    </View>
  );
};

const stylesFn = ({ Colors, Fonts, Layout, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      ...Layout.flex,
    },
    inputRowContainer: {
      ...Layout.flexRow,
      ...Layout.justifyBetween,
    },
    rowInputContainer: {
      width: '48%',
      marginVertical: scaleVertical(8),
    },
    inputContainer: {
      marginVertical: scaleVertical(8),
    },
  });

export default FamilyDetailsForm;
