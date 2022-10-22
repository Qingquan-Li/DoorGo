import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

// import { NativeStackHeaderProps } from '@react-navigation/native-stack';
// export default function ProfileScreen({ navigation }: NativeStackHeaderProps) {
export default function ProfileScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My account</Text>
      <Button
        title='Button: Sign up'
        onPress={() => navigation.navigate('SignUp')}
      />
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
