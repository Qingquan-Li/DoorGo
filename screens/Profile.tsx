import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>My account</Text>
        <Button title='Sign up' />
      </View>
      <Text></Text>
      <View style={styles.separator} />
      <Text></Text>
      <Button title='Feedback >' />
      <Button title='About Us >' />
      <Button title='Terms of Service >' />
      <Button title='Privacy Policy >' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#DCDCDC',
  },
});
