import React, {FC} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import {colors} from '../../utils/styles';
import Title from '../Title';
import Paragraph from '../Paragraph';

export interface ListItemProps {
  data: any;
  icons?: boolean;
  messageNotData?: string;
  categories?: boolean;
  courses?: boolean;
  onPressEdit?: (item: any) => void;
  onPressTrash?: (item: any) => void;
}

const ListItem: FC<ListItemProps> = ({
  data,
  icons,
  messageNotData,
  categories,
  courses,
  onPressEdit,
  onPressTrash,
}) => {
  return (
    <View>
      {data.length && categories ? (
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
                    onPress={() => onPressEdit && onPressEdit(item)}>
                    <Icon name="edit" color={colors.BLUE_SECONDARY} size={24} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.flatTouch, styles.flatTouchTrash]}
                    onPress={() => onPressTrash && onPressTrash(item._id)}>
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
      ) : courses && data.result ? (
        <FlatList
          data={data.result.docs}
          renderItem={({item}) => (
            <View style={[styles.flat, styles.flatCourses]} key={item._id}>
              <View style={styles.flatTextWrapper}>
                <View
                  style={{
                    alignItems: 'flex-start',
                  }}>
                  <Title
                    size={20}
                    title={item.name}
                    color={colors.WHITE_PRIMARY}
                  />
                  <Paragraph
                    text={item.description}
                    color={colors.WHITE_PRIMARY}
                  />
                </View>
              </View>

              {icons && (
                <View style={styles.flatIconsWrapper}>
                  <TouchableOpacity
                    style={styles.flatTouch}
                    onPress={() => onPressEdit && onPressEdit(item)}>
                    <Icon name="edit" color={colors.BLUE_SECONDARY} size={24} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.flatTouch, styles.flatTouchTrash]}
                    onPress={() => onPressTrash && onPressTrash(item._id)}>
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
          <Text style={styles.notItemsText}>
            {messageNotData ? messageNotData : ''}
          </Text>
        </View>
      )}
    </View>
  );
};

export default ListItem;
