import React, {FC, useEffect, useState} from 'react';
import {View, Picker, Text} from 'react-native';
import {Formik} from 'formik';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {object, string} from 'yup';

import {t} from '../../../../i18n';
import styles from './styles';
import {Container, PrimaryButton, Input} from '../../../../shared';
import {ScreensNames} from '../../../../utils/screens';
import {
  ActionEnum,
  ListCategoriesProps,
} from '../../../categories/screens/List';
import {CoursesDocs} from '../List';
import {getCategories, putCourses} from '../../../../services';

type FormEdit = {
  _id: string;
  idCategory: {
    _id: string;
    name: string;
  };
  categorie?: string;
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

  const [categories, setCategories] = useState<ListCategoriesProps[]>([]);
  const [pickerSelect, setPickerSelect] = useState(
    initialValues.idCategory._id,
  );
  const [errorPicker, setErrorPicker] = useState(false);

  const validationSchema = object().shape({
    name: string().required(t('courses:nameRequired')),
    description: string().required(t('courses:descriptionRequired')),
  });

  const handleSubmitTaxesEdit = async (formValues: FormEdit) => {
    const response = await putCourses(
      '/courses',
      formValues._id,
      formValues.idCategory._id,
      formValues.name,
      formValues.description,
    );

    if (response) {
      navigation.navigate(ScreensNames.listCourses, {
        screen: ScreensNames.listCourses,
        params: {
          status: ActionEnum.update,
        },
      });
    }
  };

  const listCategories = async () => {
    const response = await getCategories('/categories');
    setCategories(response);
  };

  useEffect(() => {
    listCategories();
  }, []);

  return (
    <Container style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmitTaxesEdit(values)}
        validateOnMount={true}
        validationSchema={validationSchema}>
        {({
          handleChange,
          values,
          handleBlur,
          handleSubmit,
          errors,
          isValid,
        }) => (
          <View style={styles.form}>
            <View>
              <Text style={styles.label}>{t('courses:categorie')}</Text>
              <View style={styles.group}>
                <View style={styles.picker}>
                  <Picker
                    onValueChange={(item, index) => {
                      values.idCategory._id = item;
                      setPickerSelect(item);
                      item ? setErrorPicker(false) : setErrorPicker(true);
                    }}
                    selectedValue={pickerSelect}>
                    <Picker.Item value="" label="Selecione um valor" />
                    {categories.length > 0 &&
                      categories.map((item) => (
                        <Picker.Item
                          key={item._id}
                          value={item._id}
                          label={item.name}
                        />
                      ))}
                  </Picker>
                </View>
                {errorPicker && (
                  <Text style={styles.error}>
                    {t('courses:categorieRequired')}
                  </Text>
                )}
              </View>
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
            <PrimaryButton
              text={t('categories:save')}
              onPress={handleSubmit}
              disabled={!isValid || errorPicker}
            />
          </View>
        )}
      </Formik>
    </Container>
  );
};

export default Edit;
