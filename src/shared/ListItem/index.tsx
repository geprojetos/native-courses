import React, {FC} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import {colors} from '../../utils/styles';
import {t} from '../../i18n';
import {useNavigation} from '@react-navigation/native';

export interface ListCategoriesProps {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
export interface ListItemProps {
  data: ListCategoriesProps[];
  icons?: boolean;
  editNativateTo?: string;
  onPressTrash?: string;
}

const ListItem: FC<ListItemProps> = ({
  data,
  icons,
  editNativateTo,
  onPressTrash,
}) => {
  const navigation = useNavigation();

  const handleOnPressEdit = (item: ListCategoriesProps) => {
    editNativateTo
      ? navigation.navigate(editNativateTo, {
          params: item,
        })
      : navigation.isFocused();
  };
  const handleOnPressTrash = onPressTrash;

  return (
    <View style={styles.container}>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.flat} key={item._id}>
              <View style={styles.flatTextWrapper}>
                <Text style={styles.flatText}>{item.name}</Text>
              </View>

              {icons && (
                <View style={styles.flatIconsWrapper}>
                  <TouchableOpacity
                    style={styles.flatTouch}
                    onPress={() => handleOnPressEdit(item)}>
                    <Icon name="edit" color={colors.BLUE_SECONDARY} size={24} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.flatTouch, styles.flatTouchTrash]}
                    onPress={() => handleOnPressTrash}>
                    <Icon
                      name="trash-alt"
                      color={colors.RED_PRIMARY}
                      size={24}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
        />
      ) : (
        <View style={styles.notItems}>
          <Text style={styles.notItemsText}>{t('common:description')}</Text>
        </View>
      )}
    </View>
  );
};

export default ListItem;
