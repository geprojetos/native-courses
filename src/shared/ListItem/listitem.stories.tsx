import React, {FC} from 'react';
import {Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import CenterView from '../../../storybook/stories/CenterView';

export const ListItem: FC = ({}) => <Text>ListItem</Text>;

ListItem.defaultProps = {};

storiesOf('ListItem', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('listitem', () => <ListItem />);
