import React, {FC} from 'react';
import {Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import CenterView from '../../../storybook/stories/CenterView';

export const IconBack: FC = ({}) => <Text>IconBack</Text>;

IconBack.defaultProps = {};

storiesOf('IconBack', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('iconback', () => <IconBack />);
