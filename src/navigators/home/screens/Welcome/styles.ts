import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  header: {
    marginBottom: 30,
    alignSelf: 'center',
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
