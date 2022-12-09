import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<Props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
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
    bottom: 0,
    alignSelf: "center",
  },
});
