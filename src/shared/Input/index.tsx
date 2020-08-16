import React, {FC} from 'react';
import {View, Text, TextInput, TextInputProps} from 'react-native';

import styles from './styles';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

const Input: FC<InputProps> = ({label, error, ...props}) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput {...props} style={styles.input} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
