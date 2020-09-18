import React, {FC} from 'react';
import {Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import CenterView from '../../../storybook/stories/CenterView';

export const PrimaryButton: FC = ({}) => <Text>PrimaryButton</Text>;

PrimaryButton.defaultProps = {};

storiesOf('PrimaryButton', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('primarybutton', () => <PrimaryButton />);
