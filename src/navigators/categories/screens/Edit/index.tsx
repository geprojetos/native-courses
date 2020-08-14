import React, {FC} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {t} from '../../../../i18n';
import styles from './styles';
import {useRoute, useNavigation} from '@react-navigation/native';
import {ListCategoriesProps} from 'shared/ListItem';
import {colors} from '../../../../utils/styles';
import {ScreensNames} from '../../../../utils/screens';
import {Input} from '../../../../shared';

export interface EditProps {
  name?: string;
}

const Edit: FC<EditProps> = () => {
  const {params} = useRoute();
  const navigation = useNavigation();

  const valuesParams: ListCategoriesProps = (params as any).params;

  const initialValues = {
    name: valuesParams.name,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('validationMessages:nameRequired')),
  });

  const handleSubmitTaxesEdit = (formValues: any) => {
    navigation.navigate(ScreensNames.listCategories);
  };

  return (
    <View style={styles.container}>
      <Text>{t('categories:categories')}</Text>
      <Text>{valuesParams._id}</Text>
      <Text>{valuesParams.name}</Text>
      <Text>{valuesParams.createdAt}</Text>
      <Text>{valuesParams.updatedAt}</Text>

      <Formik
        initialValues={initialValues}
        onSubmit={() => handleSubmitTaxesEdit(valuesParams)}
        validateOnMount={true}
        validationSchema={validationSchema}>
        {({handleChange, values, handleBlur, handleSubmit}) => (
          <>
            <Input
              label="teste"
              placeholder="name"
              returnKeyType="done"
              keyboardType="default"
              autoCapitalize="none"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              onSubmitEditing={() => handleSubmit()}
            />
            {/* <View style={{marginHorizontal: 15, marginBottom: 15}}>
              <Text
                style={{
                  color: colors.BLUE_PRIMARY,
                  fontWeight: '600',
                  marginBottom: 4,
                }}>
                Name
              </Text>
              <TextInput
                placeholder="name"
                returnKeyType="done"
                keyboardType="default"
                autoCapitalize="none"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                onSubmitEditing={() => handleSubmit()}
                style={{
                  backgroundColor: colors.WHITE_PRIMARY,
                  color: colors.BLUE_PRIMARY,
                  fontWeight: '600',
                  paddingHorizontal: 15,
                  borderColor: colors.GRAY_SECONDARY,
                  borderWidth: 1,
                  borderRadius: 4,
                }}
              />
            </View> */}
          </>
        )}
      </Formik>
    </View>
  );
};

export default Edit;
