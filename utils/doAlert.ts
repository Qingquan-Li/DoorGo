import { Alert } from "react-native";

const doAlert = () => {
  Alert.alert(
    'Not Available',
    'This feature is pending development.',
    [
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed')
      },
    ]
  );
}

export default doAlert;
