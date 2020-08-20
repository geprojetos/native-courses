import {StyleSheet} from 'react-native';
import {colors} from '../../utils/styles';

const styles = (color?: string, size?: number) =>
  StyleSheet.create({
    title: {
      color: color ? color : colors.BLUE_PRIMARY,
      fontSize: size ? size : 40,
      textAlign: 'center',
      marginBottom: 10,
    },
  });

export default styles;
