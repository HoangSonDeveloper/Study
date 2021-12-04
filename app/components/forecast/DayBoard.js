import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import AppText from "../AppText";
import ListItemSeperator from "../ListItemSeperator";
import DayItem from "./DayItem";

function DayBoard({ day }) {
  return (
    <View style={styles.view}>
      <AppText style={styles.text}> The next 10 days</AppText>
      <FlatList
        data={day}
        keyExtractor={(day, index) => index}
        renderItem={({ item }) => (
          <DayItem
            day={item.dt}
            min={item.temp.min}
            max={item.temp.max}
            icon={item.weather[0].icon}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
    padding: 4,
  },
  view: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 20, 0.25)",
    borderRadius: 10,
  },
});

export default DayBoard;
