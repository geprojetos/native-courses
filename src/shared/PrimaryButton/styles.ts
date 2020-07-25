import {StyleSheet} from 'react-native';
import {colors} from '../../utils/styles';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.BLUE_PRIMARY,
    borderWidth: 1,
    borderColor: colors.BLUE_SECONDARY,
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
    padding: 15,
    margin: 5
  },
  buttonText: {
    color: colors.WHITE_PRIMARY
  }
});

export default styles;
