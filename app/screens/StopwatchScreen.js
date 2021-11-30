import React from "react";
import { StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import StopwatchButtons from "../components/stopwatch/StopwatchButtons";
import Timer from "../components/stopwatch/Timer";
import useStopwatch from "../hook/useStopwatch";

function StopwatchScreen() {
  const { interval, lap, running, start, stop, reset, resume, getLap } =
    useStopwatch();

  return (
    <Screen style={styles.screen}>
      <View style={styles.watchContainer}>
        <Timer
          interval={lap.reduce((total, cur) => total + cur, 0) + interval}
        />
      </View>
      <StopwatchButtons
        running={running}
        interval={interval}
        lap={lap}
        startCount={start}
        stopCount={stop}
        resetCount={reset}
        resumeCount={resume}
        getLap={getLap}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "black",
  },
  watchContainer: {
    flex: 1.5,
  },
});

export default StopwatchScreen;
