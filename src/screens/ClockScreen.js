import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Svg, { Line, Circle } from "react-native-svg";

const AnalogClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hourDeg = (hours % 12) * 30 + minutes * 0.5; // 360 / 12 = 30
  const minuteDeg = minutes * 6; // 360 / 60 = 6
  const secondDeg = seconds * 6; // 360 / 60 = 6

  return (
    <View style={styles.container}>
      <Svg height="200" width="200" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="black"
          strokeWidth="2.5"
          fill="white"
        />

        {/* Saat Çizgileri */}
        {[...Array(12)].map((_, i) => (
          <Line
            key={i}
            x1="50"
            y1="5"
            x2="50"
            y2="10"
            stroke="black"
            strokeWidth="2"
            transform={`rotate(${i * 30}, 50, 50)`}
          />
        ))}

        {/* Akrep */}
        <Line
          x1="50"
          y1="50"
          x2="50"
          y2="30"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${hourDeg}, 50, 50)`}
        />

        {/* Yelkovan */}
        <Line
          x1="50"
          y1="50"
          x2="50"
          y2="20"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${minuteDeg}, 50, 50)`}
        />

        {/* Saniye */}
        <Line
          x1="50"
          y1="50"
          x2="50"
          y2="15"
          stroke="red"
          strokeWidth="1"
          strokeLinecap="round"
          transform={`rotate(${secondDeg}, 50, 50)`}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282c34",
  },
});

export default AnalogClock;
