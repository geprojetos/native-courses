import React, {FC} from 'react';
import {Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import CenterView from '../../../storybook/stories/CenterView';

export interface TitleProps {
  title: string;
}

export const Title: FC<TitleProps> = ({title}) => <Text>{title}</Text>;

Title.defaultProps = {};

storiesOf('Title', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('title', () => <Title title="Test" />);
