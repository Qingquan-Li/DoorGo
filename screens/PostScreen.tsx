import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import doAlert from '../utils/doAlert';

export default function PostScreen() {
  return (
    <View style={styles.container}>
      <Text>To take a photo of an entrance,</Text>
      <Text></Text>
      <Text>allow access to your camera and location.</Text>
      <Text></Text>
      <Text></Text>
      <Button
        title='Open settings'
        onPress={() => doAlert()}
      />
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
});
