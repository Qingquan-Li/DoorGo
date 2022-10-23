import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { Link } from '@react-navigation/native';

import LogInForm from '../components/LogInForm';

export default function LogInScreen() {
  return (
    <View style={styles.container}>
      <LogInForm />
      <View style={styles.separator} />
        <Link to={{ screen: 'SignUp' }}>
          Don't have an account?
          <Text style={styles.signUp}> Sign up</Text>
        </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#DCDCDC',
  },
  signUp: {
    fontWeight: 'bold',
  },
});
