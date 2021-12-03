import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import HourItem from "./HourItem";
import AppText from "../AppText";

function HourBoard({ hour, today }) {
  if (!today) return null;

  const description = today[0].weather[0].description;
  const uppercase = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  return (
    <View style={styles.view}>
      <AppText style={styles.text}>{uppercase(description)}</AppText>
      <FlatList
        data={hour}
        keyExtractor={(hour, index) => index}
        renderItem={({ item, index }) => (
          <HourItem
            time={item.dt}
            temp={item.temp}
            icon={item.weather[0].icon}
          />
        )}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 12,
    marginBottom: 12,
    backgroundColor: "rgba(0, 0, 20, 0.25)",
  },
  text: {
    marginBottom: 8,
  },
});

export default HourBoard;
