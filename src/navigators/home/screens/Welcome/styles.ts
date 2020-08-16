import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  logo: {
    borderWidth: 2,
    borderColor: colors.WHITE_PRIMARY,
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    flex: 1,
  },
  buttonLelf: {
    marginRight: 10,
  },
});

export default styles;
