import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import CustomButton from "../components/customPostButton";

//some DRY code, especially the styling

export default function Door({ navigation }: { navigation: any }) {
  const [isSingleDoor, setSingleDoor] = useState<boolean>(false);
  const [isDoubleDoor, setDoubleDoor] = useState<boolean>(false);
  const [isAutomaticDoor, setAutomaticDoor] = useState<boolean>(false);
  const [isRevolvingDoor, setRevolvingDoor] = useState<boolean>(false);
  const [isOpenDoor, setOpenDoor] = useState<boolean>(false);
  const [isNone, setNone] = useState<boolean>(false);

  let proceedToMiscLabel = () => {
    navigation.navigate("Misc");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.pop(1)}>
        <Text style={styles.backButton}>{"< Previous"} </Text>
      </Pressable>

      <Text style={styles.title}> Door Attributes </Text>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isSingleDoor}
          disabled={false} //if they press none then I can make this false eventually
          onValueChange={setSingleDoor}
          color={isSingleDoor ? "#34eba4" : undefined}
        />
        <Text style={styles.paragraph}>Single Door</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isDoubleDoor}
          disabled={false} //if they press none then I can make this false eventually
          onValueChange={setDoubleDoor}
          color={isDoubleDoor ? "#34eba4" : undefined}
        />
        <Text style={styles.paragraph}>Double Door</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isAutomaticDoor}
          disabled={false} //if they press none then I can make this false eventually
          onValueChange={setAutomaticDoor}
          color={isAutomaticDoor ? "#34eba4" : undefined}
        />
        <Text style={styles.paragraph}>Automatic Door</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isRevolvingDoor}
          disabled={false} //if they press none then I can make this false eventually
          onValueChange={setRevolvingDoor}
          color={isRevolvingDoor ? "#34eba4" : undefined}
        />
        <Text style={styles.paragraph}>Revolving Door</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isOpenDoor}
          disabled={false} //if they press none then I can make this false eventually
          onValueChange={setOpenDoor}
          color={isOpenDoor ? "#34eba4" : undefined}
        />
        <Text style={styles.paragraph}>Open Door</Text>
      </View>

      <CustomButton title={"Next"} onPress={proceedToMiscLabel} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },

  title: {
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 50,
    marginTop: 40,
  },

  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 20,
    fontWeight: "bold",
  },
  checkbox: {
    margin: 8,
    marginLeft: 45,
  },

  backButton: {
    marginLeft: 10,
    color: "#0055b3",
    fontSize: 20,
    fontWeight: "300",
  },
});
