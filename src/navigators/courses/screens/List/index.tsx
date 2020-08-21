import React, {FC, useState, useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {t} from '../../../../i18n';
import styles from './styles';
import {Container, ListItem, PrimaryButton, Title} from '../../../../shared';
import {Modalize} from 'react-native-modalize';
import {colors} from '../../../../utils/styles';

export interface ListProps {
  name?: string;
}

const List: FC<ListProps> = () => {
  const [error, setError] = useState('');
  const modalizeRef = useRef<Modalize>(null);

  const handleNavigationAdd = () => {
    return;
  };

  const handleNavigateEdit = (id: string) => {
    return id;
  };

  const handleOnOpenActionSheet = (item: any) => {
    return item;
  };

  const handleRemoveCategorie = () => {
    return;
  };

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
            data={[]}
            icons={true}
            onPressEdit={(item) => handleNavigateEdit(item)}
            onPressTrash={(id) => handleOnOpenActionSheet(id)}
            messageNotData={t('courses:notListCourses')}
          />
        </>
      )}

      <Modalize ref={modalizeRef} snapPoint={150}>
        <Container>
          <Title title={t('categories:removeConfirm')} size={24} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              height: 80,
            }}>
            <View style={{flex: 1, marginRight: 15}}>
              <PrimaryButton
                bkg={colors.RED_PRIMARY}
                borderColor={colors.RED_PRIMARY}
                text={t('categories:remove')}
                onPress={handleRemoveCategorie}
              />
            </View>
            <View style={{flex: 1}}>
              <PrimaryButton
                bkg={colors.WHITE_PRIMARY}
                color={colors.BLUE_PRIMARY}
                text={t('categories:cancel')}
                onPress={() => modalizeRef.current?.close()}
              />
            </View>
          </View>
        </Container>
      </Modalize>
    </Container>
  );
};

export default List;
