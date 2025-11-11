import { View } from 'react-native';
import React from 'react';
import { Text } from '../../../../common/components';
import { scale, scaleVertical } from '../../../../theme/scale';

type LoginHeaderProps = {
  heading: string;
  subHeading: string;
};
const LoginHeader: React.FC<LoginHeaderProps> = ({ heading, subHeading }) => {
  return (
    <>
      <Text type="h1" weight="bold">
        {heading}
      </Text>
      <Text
        type="regular"
        weight="medium"
        style={{ marginTop: scaleVertical(12) }}
      >
        {subHeading}
      </Text>
    </>
  );
};

export default LoginHeader;
