import {StyleSheet} from 'react-native';

import {colors} from '../../utils/styles';

const styles = StyleSheet.create({
  control: {
    marginHorizontal: 15,
    marginBottom: 15,
  },
  label: {
    color: colors.BLUE_PRIMARY,
    fontWeight: '600',
    marginBottom: 4,
  },
  input: {
    backgroundColor: colors.WHITE_PRIMARY,
    color: colors.BLUE_PRIMARY,
    fontWeight: '600',
    paddingHorizontal: 15,
    borderColor: colors.GRAY_SECONDARY,
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default styles;
