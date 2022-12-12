import { Alert } from "react-native";

const succesfulAlert = () => {
  Alert.alert(
    'Succesful!',
    'The coordinates were succesfully received',
    [
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed')
      },
    ]
  );
}

export default succesfulAlert;
