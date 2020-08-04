import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {colors} from '../../../../utils/styles';
import {ScreensNames} from '../../../../utils/screens';
import styles from './styles';
import ListItem from '../../../../shared/ListItem';

const List: FC = () => {
  const navigation = useNavigation();
  const data: any = [
    {
      id: '1',
      value: 'Value 1',
    },
    {
      id: '2',
      value: 'Value 2',
    },
    {
      id: '3',
      value: 'Value 3',
    },
  ];
  const handleNavigationAdd = () => {
    navigation.navigate(ScreensNames.addCategories);
  };

  const handleNavigationEdit = () => {
    navigation.navigate(ScreensNames.editCategories);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconAdd} onPress={handleNavigationAdd}>
        <Icon name="plus-circle" color={colors.GREEN_PRIMARY} size={34} />
      </TouchableOpacity>
      <ListItem
        data={data}
        icons={true}
        onPressTrash={() => navigation.navigate(ScreensNames.welcome)}
        onPressEdit={handleNavigationEdit}
      />
    </View>
  );
};

export default List;
