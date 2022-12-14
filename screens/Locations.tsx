import React, { useState, useEffect } from "react";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import * as Location from "expo-location";
import CustomButton from "../components/customPostButton";
import succesfulAlert from "../utils/successAlert";         //is this too much? Should I just implement it in the same page since its only one small function?

//

export default function Locations({ navigation }: { navigation: any }) {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);

  //upon entering the screen, get permissions and if its not granted set the error msg
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  //let altitude: number|null = 0; //did not work

  //this function gets the location and then sets it
  const getLocation = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({
        // enableHighAccuracy: true,
        // accuracy: Location.Accuracy.High,
      });
      setLocation(location);
      //altitude = location.coords.altitude;
    } catch (error) {
      console.log(error);
    }
  };

  //we gather the location in text if we received the location
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  //if succesful we return this screen? Perhaps an alert would be better? Or a modal
  if (location) {
    console.log(text);
    succesfulAlert();

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Succesfuly received location</Text>
        <Text>{text}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.popToTop()}
        >
          <Text style={styles.buttonText}>Start Over</Text>
        </TouchableOpacity>

        <CustomButton title="Submit" onPress={() => undefined} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.pop(1)}>
        <Text style={styles.backButton}>{"< Previous"} </Text>
      </Pressable>

      <View style={styles.innerView}>
        <Text style={styles.title}>Get Location</Text>
        <Text></Text>
        <Text style={styles.text}>
          Gently place your device on the door of the store front and press the
          button to get the location
        </Text>
        <Text></Text>
        <Text></Text>
      </View>

      {/* <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
      >
        <Text style={styles.buttonText}>Take picture</Text>

      </TouchableOpacity> */}

      <CustomButton title={"Press for Location"} onPress={getLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,

    // backgroundColor: '#fff',
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    alignItems: "center",
    marginTop: 40,
  },

  innerView: {
    justifyContent: "center",
    alignItems: "center",
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    backgroundColor: "#DCDCDC",
  },

  text: {
    textAlign: "center",
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },

  button: {
    width: 300,
    height: 50,
    backgroundColor: "#000000",
    borderRadius: 5,
    marginBottom: 20,
    position: "absolute",
    bottom: 60,
    alignSelf: "center",
  },

  backButton: {
    color: "#0055b3",
    fontSize: 20,
    fontWeight: "300",
    marginLeft: 15,
  },
});
