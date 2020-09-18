import React, {FC} from 'react';
import {Text} from 'react-native';

import styles from './styles';

export interface ParagraphProps {
  text: string;
  color?: string;
}

const Paragraph: FC<ParagraphProps> = ({text, color}) => {
  return <Text style={styles(color).text}>{text}</Text>;
};

export default Paragraph;
