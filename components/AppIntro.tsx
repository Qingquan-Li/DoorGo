import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const AppIntro = () => {
  return (
    <View>
      <View style={styles.introContainer}>
        <Text style={styles.title}>App Intro</Text>
        <Text>What is this app?</Text>
        <Text></Text>
        <Text>How to use it?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  introContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});

export default AppIntro;
