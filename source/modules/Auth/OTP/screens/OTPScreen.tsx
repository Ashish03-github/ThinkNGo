import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Content } from '../../../../common/components';
import OTPHeader from '../components/OTPHeader';
import OTPInputSection from '../components/OTPInputSection';
import OTPResendSection from '../components/OTPResendSection';
import { useTheme } from '../../../../common/hooks';
import { RootTheme } from '../../../../theme';

const OTPScreen = () => {
  const { Layout } = useTheme();
  const styles = React.useMemo(() => stylesFn({ Layout }), [Layout]);

  return (
    <Content withButton isPreAuth={false}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <OTPHeader />
        </View>
        <View style={styles.contentWrapper}>
          <OTPInputSection />
          <OTPResendSection />
        </View>
      </View>
    </Content>
  );
};

const stylesFn = ({ Layout }: Pick<RootTheme, 'Layout'>) =>
  StyleSheet.create({
    container: {
      ...Layout.flex,
      //   height: '100%',
      width: '100%',
    },
    headerWrapper: {
      //   alignItems: 'center',
      //   justifyContent: 'flex-start',
      //   width: '100%',
    },
    contentWrapper: {
      alignItems: 'center',
      //   justifyContent: 'center',
      width: '100%',
      flex: 1,
      //   backgroundColor: 'red',
    },
  });

export default OTPScreen;
