import React, {FC, useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {get} from '../../../../services';
import {colors} from '../../../../utils/styles';
import {ScreensNames} from '../../../../utils/screens';
import styles from './styles';
import ListItem, {ListCategoriesProps} from '../../../../shared/ListItem';

const List: FC = () => {
  const [categories, setCategories] = useState<ListCategoriesProps[]>([]);
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleNavigationAdd = () => {
    navigation.navigate(ScreensNames.addCategories);
  };
  const handleNavigationEdit = () => {
    navigation.navigate(ScreensNames.editCategories);
  };

  const getCategories = async () => {
    try {
      const response = await get('/categories');
      setCategories(response);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <View style={styles.container}>
      {error ? (
        <Text>{error}</Text>
      ) : (
        <>
          <TouchableOpacity
            style={styles.iconAdd}
            onPress={handleNavigationAdd}>
            <Icon name="plus-circle" color={colors.GREEN_PRIMARY} size={34} />
          </TouchableOpacity>
          <ListItem
            data={categories}
            icons={true}
            onPressTrash={() => navigation.navigate(ScreensNames.welcome)}
            onPressEdit={handleNavigationEdit}
          />
        </>
      )}
    </View>
  );
};

export default List;
