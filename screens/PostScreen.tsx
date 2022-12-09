import { NavigationHelpersContext } from "@react-navigation/native";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

import CustomButton from "../components/customPostButton";
import doAlert from "../utils/doAlert";

export default function PostScreen({ navigation }: any) {
  const onPressHandler = () => {
    navigation.navigate("CameraP");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To take a photo</Text>
      <Text></Text>
      <Text>allow access to your camera and location.</Text>
      <Text></Text>
      <Text></Text>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
      >
        <Text style={styles.buttonText}>Take picture</Text>

      </TouchableOpacity> */}

      <CustomButton onPress={onPressHandler} title={"Take a Photo"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
    // backgroundColor: '#fff',
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    alignSelf: "center",
  },

  button: {
    width: 300,
    height: 50,
    backgroundColor: "#000000",
    alignItems: "center",
    borderRadius: 5,
    position: "absolute",
    bottom: 5,
    marginBottom: 20,
  },
});
