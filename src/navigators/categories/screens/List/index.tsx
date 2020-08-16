import React, {FC, useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {getCategories} from '../../../../services';
import {colors} from '../../../../utils/styles';
import {ScreensNames} from '../../../../utils/screens';
import styles from './styles';
import ListItem, {ListCategoriesProps} from '../../../../shared/ListItem';
import {Container} from '../../../../shared';

export enum ActionEnum {
  update = 'update',
}

const List: FC = ({route}: any) => {
  const [categories, setCategories] = useState<ListCategoriesProps[]>([]);
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleNavigationAdd = () => {
    navigation.navigate(ScreensNames.addCategories);
  };

  const listCategories = async () => {
    try {
      const response = await getCategories('/categories');
      setCategories(response);
    } catch (error) {
      setError(error);
    }
  };

  const updateListCategories = () => {
    listCategories();
    if (route?.params?.params === ActionEnum.update) {
      route.params.params = '';
    }
  };

  useEffect(() => {
    updateListCategories();
  }, [route?.params?.params]);

  return (
    <Container style={{flex: 1, justifyContent: 'flex-start'}}>
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
            editNativateTo={ScreensNames.editCategories}
          />
        </>
      )}
    </Container>
  );
};

export default List;
