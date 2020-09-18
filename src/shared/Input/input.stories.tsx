import React, {FC} from 'react';
import {Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import CenterView from '../../../storybook/stories/CenterView';

export interface InputProps {
  label?: string;
}

export const Input: FC<InputProps> = ({}) => <Text>Input</Text>;

Input.defaultProps = {};

storiesOf('Input', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('input', () => <Input />);
