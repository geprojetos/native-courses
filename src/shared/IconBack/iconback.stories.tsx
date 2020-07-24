import React, {FC} from 'react';
import {Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import CenterView from '../../../storybook/stories/CenterView';

export interface IconBackProps { }

export const IconBack: FC<IconBackProps> = ({}) => <Text>IconBack</Text>;

IconBack.defaultProps = {};

storiesOf('IconBack', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('iconback', () => <IconBack />)
