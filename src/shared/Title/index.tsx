import React, {FC} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

type FontSize = 40 | 36 | 32 | 28 | 24 | 20;

export interface TitleProps {
  title: string;
  color?: string;
  size?: FontSize;
}

const Title: FC<TitleProps> = ({title, color, size}) => {
  return <Text style={styles(color, size).title}>{title}</Text>;
};

export default Title;
