import {
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Button
        title="Dismiss"
      />
      <View style={styles.separator} />
      <Text>Don't have an account? Create one.</Text>
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
});
