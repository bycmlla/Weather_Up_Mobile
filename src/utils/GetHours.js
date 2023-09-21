import React from "react";
import { View, Text } from "react-native";
import { useState, useEffect } from "react";

export default GetHours = () => {
  const [currentDate, setCurrentDate] = useState("");

  function getDay(d){
    if (d === 0) {
      return "Sunday";
    } else if (d === 1) {
      return "Monday";
    } else if (d === 2) {
      return "Tuesday";
    } else if (d === 3) {
      return "Wednesday";
    } else if (d === 4) {
      return "Thursday";
    } else if (d === 5) {
      return "Friday";
    } else if (d === 6) {
      return "Saturday";
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
        <Text>{currentDate}</Text>
      </View>
  );
};

