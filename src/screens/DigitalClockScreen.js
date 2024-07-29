import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isChange, setIsChange] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      {isChange ? (
        <>
          <Text style={styles.clockText}>
            {currentTime.toLocaleTimeString("tr-TR", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </Text>
          <Text style={styles.dateText}>
            {currentTime.toLocaleDateString("tr-TR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
        </>
      ) : (
        <>
          <Text style={styles.clockText}>
            {currentTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </Text>
          <Text style={styles.dateText}>
            {currentTime.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
        </>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsChange(!isChange)}
      >
        <Text style={styles.buttonText}>Change</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  clockText: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#6200ea",
  },
  dateText: {
    fontSize: 30,
    color: "#6200ea",
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 20,
    padding: 5,
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: 20,
  },
});

export default DigitalClock;
