import {StyleSheet} from 'react-native';
import {colors} from '../../utils/styles';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.BLUE_PRIMARY,
    borderWidth: 1,
    borderColor: colors.BLUE_SECONDARY,
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    height: 50,
  },
  buttonText: {
    color: colors.WHITE_PRIMARY,
  },
});

export default styles;
