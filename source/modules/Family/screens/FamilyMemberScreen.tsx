import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {
  Button,
  Content,
  FormInput,
  GenderComponent,
  Input,
  SvgIcon,
  Text,
} from '../../../common/components';
import { useTheme } from '../../../common/hooks';
import { RootTheme } from '../../../theme';
import { scale, scaleVertical, SCREEN_WIDTH } from '../../../theme/scale';
import EmptyMember from '../components/EmptyMember';
import FamilyDetailsForm from '../components/FamilyDetailsForm';
import FamilyMembersList from '../components/FamilyMembersList';

const FamilyMemberScreen = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [formData, setFormData] = useState({});
  const [formHeading, setFormHeading] = useState('Family Members');
  const [count, setCount] = useState(0);

  const { Colors, Layout, Spacing, Fonts } = useTheme();
  const styles = React.useMemo(
    () => stylesFn({ Colors, Fonts, Layout, Spacing }),
    [Colors, Layout, Fonts, Spacing],
  );

  const updateComponents = () => {
    if (count < 2) {
      setFormHeading('Family Members');
      setCount(count + 1);
    } else {
      setFormHeading('Family Members');
      setCount(0);
    }
  };

  const onAddMinorPress = () => {
    setFormHeading('Add New Minor');
    setCount(3);
  };

  const onAddFamilyMemberPress = () => {
    setFormHeading('Add New Member');
    setCount(1);
  };

  //   if (isEmpty) {
  //     return (
  //       <Content isPreAuth={false} screenHeading="Family Members">
  //         <EmptyMember />
  //       </Content>
  //     );
  //   }

  return (
    <Content
      isPreAuth={false}
      screenHeading={formHeading}
      onButtonPress={updateComponents}
      withButton={count !== 0 ? true : false}
    >
      {count === 0 && (
        <EmptyMember
          onAddMinorPress={onAddMinorPress}
          onAddFamilyMemberPress={onAddFamilyMemberPress}
        />
      )}
      {count === 1 && <FamilyDetailsForm />}
      {count === 2 && <FamilyMembersList />}
      {count === 3 && <FamilyDetailsForm isForMinor={true} />}
    </Content>
  );
};
const stylesFn = ({ Colors, Fonts, Layout, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      ...Layout.flex,
    },
    addCircularButton: {
      //   width: scale(60),
      //   height: scale(60),
      ...Layout.center,
      //   ...Colors.primary,
      //   borderRadius: scale(60),
      ...Layout.absolute,
      ...Spacing.bottom0,
      ...Spacing.right0,
    },
  });
export default FamilyMemberScreen;
