import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  headerWrapper: {
    backgroundColor: colors.WHITE_PRIMARY,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    color: colors.BLUE_PRIMARY,
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    color: colors.BLUE_PRIMARY,
    fontSize: 16,
    lineHeight: 22,
  },
  logoWrapper: {
    backgroundColor: colors.WHITE_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  logo: {
    borderWidth: 2,
    borderColor: colors.WHITE_PRIMARY,
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  buttonWrapper: {
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
  },
});

export default styles;
