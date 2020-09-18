import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE_PRIMARY,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    flex: 1
  },
  iconAdd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    marginBottom: 15
  }
});

export default styles;
