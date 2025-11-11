import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { RootTheme } from '../../../theme';
import { useTheme } from '../../../common/hooks';
import OnboardingCarousel from '../components/OnboardingCarousel';
import OnboardingActions from '../components/OnboardingActions';

const OnBoardingScreen = () => {
  const { Colors, Layout } = useTheme();
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  const styles = React.useMemo(
    () => stylesFn({ Colors, Layout }),
    [Colors, Layout],
  );

  const handlePageChange = (index: number) => {
    setCurrentPageIndex(index);
  };

  const handleSignIn = () => {
    // Navigate to Sign In screen
    console.log('Sign In pressed');
  };

  const handleSignUp = () => {
    // Navigate to Sign Up screen
    console.log('Sign Up pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <OnboardingCarousel onPageChange={handlePageChange} />
      </View>
      <OnboardingActions onSignIn={handleSignIn} onSignUp={handleSignUp} />
    </View>
  );
};

const stylesFn = ({ Colors, Layout }: Pick<RootTheme, 'Colors' | 'Layout'>) =>
  StyleSheet.create({
    container: {
      ...Layout.flex,
      ...Colors.white,
    },
    carouselContainer: {
      flex: 0.8,
      width: '100%',
    },
  });

export default OnBoardingScreen;
