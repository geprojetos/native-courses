import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  form: {
    justifyContent: 'space-between',
    flex: 1,
  },
  picker: {
    borderColor: colors.GRAY_SECONDARY,
    borderWidth: 1,
    borderRadius: 4,
  },
  group: {
    marginBottom: 15,
  },
  label: {
    color: colors.BLUE_PRIMARY,
    fontWeight: '600',
    marginBottom: 4,
  },
  error: {
    color: colors.RED_PRIMARY,
  },
});

export default styles;
