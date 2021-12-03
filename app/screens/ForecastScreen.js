import React, { useEffect, useState } from "react";
import { Alert, ImageBackground, StyleSheet } from "react-native";
import * as Location from "expo-location";

import DayBoard from "../components/forecast/DayBoard";
import HourBoard from "../components/forecast/HourBoard";
import MainTemp from "../components/forecast/MainTemp";
import Screen from "../components/Screen";
import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});
const apiKey = "c4902d16cb8ae6ba67a1fc32297fa6d4";

function ForecastScreen(props) {
  const [hour, setHour] = useState([]);
  const [day, setDay] = useState();
  const [current, setCurrent] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    getLocation();
    getOnecallApi();
    getCurrentApi();
  }, []);

  const getCurrentApi = async () => {
    const { data } = await apiClient.get(
      `/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${apiKey}`
    );
    setCurrent(data);
  };

  const getOnecallApi = async () => {
    const { data } = await apiClient.get(
      `/onecall?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${apiKey}`
    );
    setHour(data.hourly);
    setDay(data.daily);
  };

  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) return Alert.alert("Cannot get location");

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();
    setLocation({ latitude, longitude });
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
