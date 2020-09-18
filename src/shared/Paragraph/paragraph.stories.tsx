import React, {FC} from 'react';
import {Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import CenterView from '../../../storybook/stories/CenterView';

export interface ParagraphProps {
  text: string;
}

export const Paragraph: FC<ParagraphProps> = ({text}) => <Text>{text}</Text>;

Paragraph.defaultProps = {};

storiesOf('Paragraph', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('paragraph', () => <Paragraph text="Teste" />);
