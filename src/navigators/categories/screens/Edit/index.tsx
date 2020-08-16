import React, { FC } from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { t } from '../../../../i18n';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ListCategoriesProps } from 'shared/ListItem';
import { ScreensNames } from '../../../../utils/screens';
import { Input, Container, PrimaryButton } from '../../../../shared';
import { putCategories } from '../../../../services';
import { ActionEnum } from '../List';

type FormEdit = {
  name: string;
};

const Edit: FC = () => {
  const { params } = useRoute();
  const navigation = useNavigation();

  const valuesParams: ListCategoriesProps = (params as any).params;

  const initialValues = {
    name: valuesParams.name,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('categories:nameRequired')),
  });

  const handleSubmitTaxesEdit = async (formValues: FormEdit) => {
    await putCategories('categories', valuesParams._id, formValues.name);
    navigation.navigate(ScreensNames.listCategories, {
      screen: ScreensNames.listCategories,
      params: {
        status: ActionEnum.update,
      },
    });
  };

  return (
    <Container style={{ flex: 1, justifyContent: 'flex-start' }}>
      <Formik
        initialValues={initialValues}
        onSubmit={values => handleSubmitTaxesEdit(values)}
        validateOnMount={true}
        validationSchema={validationSchema}>
        {({ handleChange, values, handleBlur, handleSubmit, errors }) => (
          <View
            style={{
              justifyContent: 'space-between',
              flex: 1,
            }}>
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

export default Edit;
