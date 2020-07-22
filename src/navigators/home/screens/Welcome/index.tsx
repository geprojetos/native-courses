import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';

import {t} from '../../../../i18n';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../../../../shared/PrimaryButton';

export interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = () => {
  const navigation = useNavigation();

  const handleNavigationCategories = () =>
    navigation.navigate('ListCategories');
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>{t('home:title')}</Text>
        <Text style={styles.description}>{t('home:description')}</Text>
      </View>

      <View style={styles.logoWrapper}>
        <Image
          source={require('../../../../assets/icons/logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <PrimaryButton
          text={t('home:buttonCategories')}
          onPress={handleNavigationCategories}
        />
        <PrimaryButton
          text={t('home:buttonCategories')}
          onPress={handleNavigationCategories}
        />
      </View>
    </View>
  );
};

export default Welcome;
