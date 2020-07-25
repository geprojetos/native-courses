import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import ListItem from '../../../../shared/ListItem';
import {ScreensNames} from '../../../../utils/screens';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../../../utils/styles';

const List: FC = () => {
  const navigation = useNavigation();
  const data: any = [
    {
      id: '1',
      value: 'Value 1'
    },
    {
      id: '2',
      value: 'Value 2'
    },
    {
      id: '3',
      value: 'Value 3'
    }
  ];
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconAdd}>
        <Icon name="plus-circle" color={colors.GREEN_PRIMARY} size={34} />
      </TouchableOpacity>
      <ListItem
        data={data}
        icons={true}
        onPressTrash={() => navigation.navigate(ScreensNames.welcome)}
      />
    </View>
  );
};

export default List;
