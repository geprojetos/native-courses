import React, {FC, useEffect, useState, useRef} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Modalize} from 'react-native-modalize';

import {getCategories, deleteCategorie} from '../../../../services';
import {colors} from '../../../../utils/styles';
import {ScreensNames} from '../../../../utils/screens';
import styles from './styles';
import ListItem, {ListCategoriesProps} from '../../../../shared/ListItem';
import {Container, PrimaryButton} from '../../../../shared';
import {t} from '../../../../i18n';

export enum ActionEnum {
  update = 'update',
}

const List: FC = ({route}: any) => {
  const [categories, setCategories] = useState<ListCategoriesProps[]>([]);
  const [idCategorie, setIdCategorie] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();
  const modalizeRef = useRef<Modalize>(null);

  const handleNavigationAdd = () => {
    navigation.navigate(ScreensNames.addCategories);
  };

  const handleNavigateEdit = (item: ListCategoriesProps) => {
    navigation.navigate(ScreensNames.editCategories, {
      params: item,
    });
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
    if (route?.params?.params.status === ActionEnum.update) {
      route.params.params.status = '';
    }
  };

  const handleRemoveCategorie = async () => {
    try {
      const response = await deleteCategorie('/categories', idCategorie);

      if (response.success) {
        route.params.params.status = ActionEnum.update;
        updateListCategories();
        modalizeRef.current?.close();
      }
    } catch (error) {
      return error;
    }
  };

  const handleOnOpenActionSheet = (id: string) => {
    setIdCategorie(id);
    modalizeRef.current?.open();
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
            onPressEdit={(item) => handleNavigateEdit(item)}
            onPressTrash={(id) => handleOnOpenActionSheet(id)}
          />
        </>
      )}

      <Modalize ref={modalizeRef} snapPoint={180}>
        <Container>
          <PrimaryButton
            text={t('categories:remove')}
            onPress={handleRemoveCategorie}
          />
          <PrimaryButton
            text={t('categories:cancel')}
            onPress={() => modalizeRef.current?.close()}
          />
        </Container>
      </Modalize>
    </Container>
  );
};

export default List;
