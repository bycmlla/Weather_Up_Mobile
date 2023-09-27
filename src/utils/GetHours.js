import React from "react";
import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

export default GetHours = () => {
  const [currentDate, setCurrentDate] = useState("");

  function getDay(d) {
    const daysOfWeek = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
  
    if (d >= 0 && d < daysOfWeek.length) {
      return daysOfWeek[d];
    } else {
      return "Invalid day";
    }
  }
  
  useEffect(() => {
    var date = new Date();
    var hours = date.getHours() - 3; 
    var min = date.getMinutes(); 
    var day = date.getDay();
    var dayName = getDay(day);

    setCurrentDate(
      dayName + " " + hours + ":" + min 
    );
  }, []);

  return (
      <View>
        <Text style={styles.hour}>{currentDate}</Text>
      </View>
  );
};

export const styles = StyleSheet.create({
  hour: {
    fontSize: 15,
  },
})

