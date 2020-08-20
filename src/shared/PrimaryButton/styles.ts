import {StyleSheet} from 'react-native';
import {colors} from '../../utils/styles';

const styles = (bkg?: string, color?: string, borderColor?: string) =>
  StyleSheet.create({
    button: {
      backgroundColor: bkg ? bkg : colors.BLUE_PRIMARY,
      borderWidth: 1,
      borderColor: borderColor ? borderColor : colors.GRAY_SECONDARY,
      alignItems: 'center',
      borderRadius: 6,
      padding: 15,
      height: 50,
    },
    buttonText: {
      color: color ? color : colors.WHITE_PRIMARY,
    },
  });

export default styles;
