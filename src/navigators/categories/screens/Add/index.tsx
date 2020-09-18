import React, {FC} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {string, object} from 'yup';

import styles from './styles';
import {t} from '../../../../i18n';
import {postCategories} from '../../../../services';
import {ScreensNames} from '../../../../utils/screens';
import {ActionEnum} from '../List';
import {Container, Input, PrimaryButton} from '../../../../shared';

type FormAdd = {
  name: string;
};

const Add: FC = () => {
  const navigation = useNavigation();
  const initialValues = {
    name: '',
  };

  const validationSchema = object().shape({
    name: string().required(t('categories:nameRequired')),
  });

  const handleSubmitTaxesAdd = async (formValues: FormAdd) => {
    try {
      const response = await postCategories('/categories/', formValues.name);

      if (response) {
        navigation.navigate(ScreensNames.listCategories, {
          params: {
            status: ActionEnum.update,
          },
        });
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <Container style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: FormAdd) => handleSubmitTaxesAdd(values)}
        validateOnMount={true}
        validationSchema={validationSchema}>
        {({handleSubmit, handleChange, handleBlur, values, errors}) => (
          <View style={styles.form}>
            <Input
              label={t('categories:name')}
              placeholder="name"
              returnKeyType="done"
              keyboardType="default"
              autoCapitalize="none"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              onSubmitEditing={() => handleSubmit()}
              error={errors.name && errors.name}
            />
            <PrimaryButton text={t('categories:save')} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </Container>
  );
};

export default Add;
