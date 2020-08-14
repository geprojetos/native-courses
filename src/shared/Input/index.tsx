import React, {FC} from 'react';
import {View, Text, TextInput, TextInputProps} from 'react-native';

import styles from './styles';

export interface InputProps extends TextInputProps {
  label?: string;
}

const Input: FC<InputProps> = ({label, ...props}) => {
  return (
    <View style={styles.control}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput {...props} style={styles.input} />
    </View>
  );
};

export default Input;
