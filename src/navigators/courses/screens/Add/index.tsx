import React, {FC, useState, useEffect} from 'react';
import {View, Text, Picker} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {string, object} from 'yup';

import {t} from '../../../../i18n';
import styles from './styles';
import {
  ListCategoriesProps,
  ActionEnum,
} from '../../../categories/screens/List';
import {Container, Input, PrimaryButton} from '../../../../shared';
import {getCategories, postCourses} from '../../../../services';
import {ScreensNames} from '../../../../utils/screens';

type FormAdd = {
  idCategory: {
    _id: string;
  };
  name: string;
  description: string;
};

const Add: FC = () => {
  const navigation = useNavigation();
  const initialValues = {
    idCategory: {
      _id: '',
    },
    name: '',
    description: '',
  };

  const [categories, setCategories] = useState<ListCategoriesProps[]>([]);
  const [pickerSelect, setPickerSelect] = useState('');
  const [errorPicker, setErrorPicker] = useState(true);

  const validationSchema = object().shape({
    name: string().required(t('courses:nameRequired')),
    description: string().required(t('courses:descriptionRequired')),
  });

  const handleSubmitTaxesAdd = async (formValues: FormAdd) => {
    try {
      const response = await postCourses(
        '/courses',
        formValues.idCategory._id,
        formValues.name,
        formValues.description,
      );

      if (response) {
        navigation.navigate(ScreensNames.listCourses, {
          params: {
            status: ActionEnum.update,
          },
        });
      }
    } catch (error) {
      return error;
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
        onSubmit={(values) => handleSubmitTaxesAdd(values)}
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

export default Add;
