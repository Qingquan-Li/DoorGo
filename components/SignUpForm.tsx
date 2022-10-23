import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const SignUpForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doSignUP = () => {
    Alert.alert(
      'Success',
      'Your account has been successful created.',
      [
        {
          text: 'OK',
          onPress: () => console.log('(SignUp) OK Pressed')
        },
      ]
    );
  }

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        value={email}
        placeholder={'Email'}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder={'Password'}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={() => doSignUP()}>
        <View style={styles.button}>
          <Text style={styles.buttonLabel}>{'Sign up'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 100,
  },
  input: {
    width: 300,
    height: 40,
    marginBottom: 16,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#000000',
    padding: 10,
    alignItems: 'center',
  },
  buttonLabel: {
    color: '#FFFFFF',
  },
});

export default SignUpForm;
