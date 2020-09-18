import React, {FC} from 'react';
import {Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import CenterView from '../../../storybook/stories/CenterView';

export const Container: FC = ({}) => <Text>Container</Text>;

Container.defaultProps = {};

storiesOf('Container', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('container', () => <Container />);
