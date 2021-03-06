import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {t} from '../../../../i18n';
import styles from './styles';
import {ScreensNames} from '../../../../utils/screens';
import {PrimaryButton, Container, Title, Paragraph} from '../../../../shared';

const Welcome: FC = () => {
  const navigation = useNavigation();

  const handleNavigationCategories = () => {
    navigation.navigate(ScreensNames.listCategories);
  };

  const handleNavigationCourses = () => {
    navigation.navigate(ScreensNames.listCourses);
  };

  return (
    <View style={styles.container}>
      <Container>
        <View style={styles.header}>
          <Title title={t('home:title')} />
          <Paragraph text={t('home:description')} />
        </View>
        <View style={styles.logoWrapper}>
          <Image
            source={require('../../../../assets/icons/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <View style={[styles.button, styles.buttonLelf]}>
            <PrimaryButton
              text={t('home:buttonCategories')}
              onPress={handleNavigationCategories}
            />
          </View>
          <View style={styles.button}>
            <PrimaryButton
              text={t('home:buttonCourses')}
              onPress={handleNavigationCourses}
            />
          </View>
        </View>
      </Container>
    </View>
  );
};

export default Welcome;
