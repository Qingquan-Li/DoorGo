import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { Link } from '@react-navigation/native';

import SignUpForm from '../components/SignUpForm';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <SignUpForm />
      <View style={styles.separator} />
        <Link to={{ screen: 'LogIn' }}>
          Have an account already?
          <Text style={styles.logIn}> Log in</Text>
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
  logIn: {
    fontWeight: 'bold',
  }
});
