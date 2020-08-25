import React, {FC} from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {object, string} from 'yup';

import {t} from '../../../../i18n';
import styles from './styles';
import {Container, PrimaryButton, Input} from '../../../../shared';
import {ScreensNames} from '../../../../utils/screens';
import {ActionEnum} from '../../../categories/screens/List';
import {CoursesDocs} from '../List';

type FormEdit = {
  _id: string;
  idCategory: {
    _id: string;
    name: string;
  };
  name: string;
  description: string;
};

export interface EditProps {
  route?: RouteProp<Record<string, object | undefined>, string>;
}

const Edit: FC<EditProps> = ({route}) => {
  const navigation = useNavigation();
  const valuesParams: CoursesDocs = (route?.params as any).params;
  const initialValues = {
    _id: valuesParams._id,
    idCategory: {
      _id: valuesParams.idCategory._id,
      name: valuesParams.idCategory.name,
    },
    name: valuesParams.name,
    description: valuesParams.description,
  };

  const validationSchema = object().shape({
    name: string().required(t('courses:nameRequired')),
    description: string().required(t('courses:descriptionRequired')),
  });

  const handleSubmitTaxesEdit = async (formValues: FormEdit) => {
    // await putCategories('categories', valuesParams._id, formValues.name);
    // navigation.navigate(ScreensNames.listCourses, {
    //   screen: ScreensNames.listCourses,
    //   params: {
    //     status: ActionEnum.update,
    //   },
    // });
  };

  return (
    <Container style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmitTaxesEdit(values)}
        validateOnMount={true}
        validationSchema={validationSchema}>
        {({handleChange, values, handleBlur, handleSubmit, errors}) => (
          <View style={styles.form}>
            <View>
              <Input
                label={t('courses:name')}
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
              <Input
                label={t('categories:description')}
                placeholder="description"
                returnKeyType="done"
                keyboardType="default"
                autoCapitalize="none"
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                onSubmitEditing={() => handleSubmit()}
                error={errors.description && errors.description}
              />
            </View>
            <PrimaryButton text={t('categories:save')} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </Container>
  );
};

export default Edit;
