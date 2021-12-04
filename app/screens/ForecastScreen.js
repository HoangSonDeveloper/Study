import React, { useEffect, useState } from "react";
import { Alert, ImageBackground, StyleSheet } from "react-native";

import DayBoard from "../components/forecast/DayBoard";
import HourBoard from "../components/forecast/HourBoard";
import MainTemp from "../components/forecast/MainTemp";
import Screen from "../components/Screen";
import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});
const apiKey = "b706e0ce3f079001ab408ec79433842c";

function ForecastScreen(props) {
  const [hour, setHour] = useState([]);
  const [day, setDay] = useState();
  const [current, setCurrent] = useState();

  useEffect(() => {
    getCurrentApi();
    getOnecallApi();
  }, []);

  const getCurrentApi = async () => {
    const { data } = await apiClient.get(
      `/weather?lat=${12.24348}&lon=${109.196091}&units=metric&appid=${apiKey}`
    );
    setCurrent(data);
  };

  const getOnecallApi = async () => {
    const { data } = await apiClient.get(
      `/onecall?lat=${12.24348}&lon=${109.196091}&units=metric&appid=${apiKey}`
    );
    setHour(data.hourly);
    setDay(data.daily);
  };

  return (
    <ImageBackground
      source={require("../assets/cloudy.jpeg")}
      resizeMode="cover"
      style={styles.background}
      blurRadius={2}
    >
      <Screen style={styles.screen}>
        <MainTemp current={current} />
        <HourBoard hour={hour} today={day} />
        <DayBoard day={day} />
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
  },
  background: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default ForecastScreen;
