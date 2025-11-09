import { View, Text } from 'react-native';
import React from 'react';
import { Content, GenderComponent, Input } from '../../../common/components';

const CreateAccountScreen = () => {
  return (
    <Content
      withButton
      screenHeading="Create Account"
      screenSubHeading="Please fill all the details given below"
    >
      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <Input isPhone placeholder="Mobile Number" />
      <Input placeholder="Date of Birth" />
      <Input isDropdown placeholder="Blood Group" />
      <GenderComponent />
    </Content>
  );
};

export default CreateAccountScreen;
