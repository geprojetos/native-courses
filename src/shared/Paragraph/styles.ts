import {StyleSheet} from 'react-native';
import {colors} from '../../utils/styles';

const styles = (color?: string) =>
  StyleSheet.create({
    text: {
      color: color ? color : colors.BLUE_PRIMARY,
      fontSize: 16,
      lineHeight: 22,
    },
  });

export default styles;
