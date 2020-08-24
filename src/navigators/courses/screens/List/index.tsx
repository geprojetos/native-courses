import React, {FC, useState, useRef, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {t} from '../../../../i18n';
import styles from './styles';
import {Container, ListItem, PrimaryButton, Title} from '../../../../shared';
import {Modalize} from 'react-native-modalize';
import {colors} from '../../../../utils/styles';
import {getCourses} from '../../../../services';
import {ActionEnum} from '../../../categories/screens/List';

type CoursesType = {
  result: {
    docs: CoursesDocs[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number;
    nextPage: number;
  };
};

type CoursesDocs = {
  _id: string;
  idCategory: {
    _id: string;
    name: string;
  };
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
};

export interface ListProps {
  name?: string;
}

const initialValues = {
  result: {
    docs: [],
    totalDocs: 0,
    limit: 0,
    totalPages: 0,
    page: 0,
    pagingCounter: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: 0,
    nextPage: 0,
  },
};

const List: FC<ListProps> = ({route}: any) => {
  const [error, setError] = useState('');
  const [courses, setCourses] = useState<CoursesType>(initialValues);
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

  const get = async () => {
    try {
      const response: any = await getCourses('/courses', 1, 10);
      if (response) {
        setCourses(response);
        route.params = {params: {status: ActionEnum.update}};
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    get();
  }, [route.params?.params?.status]);

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
            courses={true}
            data={courses}
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
