import React, {FC} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import {colors} from '../../utils/styles';
import {t} from '../../i18n';

export interface ListItemProps {
  data: any;
  icons?: boolean;
  onPressEdit?: () => void;
  onPressTrash?: () => void;
}

const ListItem: FC<ListItemProps> = ({
  data,
  icons,
  onPressEdit,
  onPressTrash
}) => {
  const handleOnPressEdit = onPressEdit;
  const handleOnPressTrash = onPressTrash;

  return (
    <View style={styles.container}>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.flat}>
              <View style={styles.flatTextWrapper}>
                <Text style={styles.flatText}>{item.value}</Text>
              </View>

              {icons && (
                <View style={styles.flatIconsWrapper}>
                  <TouchableOpacity
                    style={styles.flatTouch}
                    onPress={handleOnPressEdit}>
                    <Icon name="edit" color={colors.BLUE_SECONDARY} size={24} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.flatTouch, styles.flatTouchTrash]}
                    onPress={handleOnPressTrash}>
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
