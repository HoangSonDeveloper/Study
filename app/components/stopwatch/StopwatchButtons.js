import React from "react";
import { StyleSheet, View } from "react-native";

import CircleButton from "./CircleButton";
import LapList from "./LapList";

function StopwatchButtons({
  running,
  interval,
  startCount,
  stopCount,
  resetCount,
  resumeCount,
  getLap,
  lap,
}) {
  return (
    <View style={styles.btnContainer}>
      {running === false && lap.length > 0 && (
        <View style={styles.btnRow}>
          <CircleButton title="Reset" onPress={resetCount} />
          <CircleButton
            title="Start"
            onPress={resumeCount}
            style={{ color: "#50d167", backgroundColor: "#1b361f" }}
          />
        </View>
      )}
      {running === false && lap.length === 0 && (
        <View style={styles.btnRow}>
          <CircleButton title="Lap" disabled />
          <CircleButton
            title="Start"
            onPress={startCount}
            style={{ color: "#50d167", backgroundColor: "#1b361f" }}
          />
        </View>
      )}
      {running === true && (
        <View style={styles.btnRow}>
          <CircleButton title="Lap" onPress={getLap} />
          <CircleButton
            title="Stop"
            onPress={stopCount}
            style={{ color: "#E33935", backgroundColor: "#3C1715" }}
          />
        </View>
      )}
      <LapList laps={lap} interval={interval} />
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flex: 2,
    paddingHorizontal: 12,
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default StopwatchButtons;
