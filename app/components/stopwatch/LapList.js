import React from "react";
import { FlatList } from "react-native";

import ListItemSeperator from "../ListItemSeperator";
import LapItem from "./LapItem";

function LapList({ laps, interval }) {
  const finishedLaps = laps.slice(1);
  let MAX = Number.MIN_SAFE_INTEGER;
  let MIN = Number.MAX_SAFE_INTEGER;
  if (finishedLaps.length >= 2) {
    finishedLaps.forEach((lap) => {
      if (lap > MAX) MAX = lap;
      if (lap < MIN) MIN = lap;
    });
  }

  return (
    <FlatList
      data={laps}
      keyExtractor={(lap, index) => index}
      renderItem={({ item, index }) => (
        <LapItem
          interval={index === 0 ? item + interval : item}
          index={laps.length - index}
          fastest={item === MAX}
          slowest={item === MIN}
        />
      )}
      ItemSeparatorComponent={ListItemSeperator}
    />
  );
}

export default LapList;
