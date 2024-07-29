import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import AnalogClock from "../src/screens/ClockScreen";
import DigitalClock from "../src/screens/DigitalClockScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Tab = createMaterialTopTabNavigator();

export default function Main() {
  //const [isAnalog, setIsAnalog] = useState(true);
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content" // 'default' | 'light-content' | 'dark-content'
        backgroundColor="#6200ea" // Status bar arka plan rengi
        translucent={false} // Status bar arka planının şeffaf olup olmadığı
      />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabel:
            route.name === "AnalogClock" ? "Analog Clock" : "Digital Clock",
          tabBarStyle: { backgroundColor: "#6200ea" },
          tabBarLabelStyle: { color: "white" },
          tabBarIndicatorStyle: { backgroundColor: "white" },
        })}
      >
        <Tab.Screen name="Digital" component={DigitalClock} />
        <Tab.Screen name="Analog" component={AnalogClock} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282c34",
  },
  button: {
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "gray",
    margin: 40,
    padding: 5,
  },
});
