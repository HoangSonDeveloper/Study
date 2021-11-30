import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../config/colors";

function CircleButton({ title, style, disabled, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => !disabled && onPress()}
      disabled={disabled}
    >
      <View style={styles.btnBorder}>
        <Text
          style={[
            styles.text,
            style,
            disabled ? { opacity: 0.5 } : { opacity: 1 },
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
  btnBorder: {
    justifyContent: "center",
    alignItems: "center",
    width: 76,
    height: 76,
    borderRadius: 38,
    borderColor: "black",
    borderWidth: 2,
  },
});

export default CircleButton;
