import {StyleSheet} from 'react-native';
import {colors} from '../../utils/styles';

const styles = StyleSheet.create({
  container: {},
  flat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.BLUE_PRIMARY,
    padding: 10,
    marginBottom: 5
  },
  flatTextWrapper: {
    maxWidth: '70%',
    overflow: 'hidden'
  },
  flatText: {
    color: colors.WHITE_PRIMARY,
    fontSize: 16,
    lineHeight: 22
  },
  flatIconsWrapper: {
    flexDirection: 'row'
  },
  flatTouch: {
    backgroundColor: colors.WHITE_PRIMARY,
    borderRadius: 10,
    padding: 8
  },
  flatTouchTrash: {
    marginLeft: 5
  },
  notItems: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  notItemsText: {
    color: colors.BLUE_PRIMARY,
    fontSize: 22,
    textAlign: 'center'
  }
});

export default styles;
