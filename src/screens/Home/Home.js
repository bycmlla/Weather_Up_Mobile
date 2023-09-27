import * as React from "react";
import { styles } from "./Style";
import { View, Text, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import GetHours from "../../utils/GetHours";
import { FontAwesome } from "@expo/vector-icons";
import {
  useFonts,
  RobotoCondensed_400Regular,
} from "@expo-google-fonts/roboto-condensed";

export default function Home() {
  // const navigation = useNavigation();
  const route = useRoute();

  const { city, state } = route.params;

  const imagePaths = [
    // require("exemple-app/assets/images/home/cloudMoon.png"),
    // require("exemple-app/assets/images/home/cloud.png"),
    require("exemple-app/assets/images/home/cloudRain.png"),
    // require("exemple-app/assets/images/home/cloudSun.png"),
    // require("exemple-app/assets/images/home/sun.png"),
  ];

  const [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.barsView}>
        <FontAwesome name="bars" size={30}/>
      </View>

      <View style={styles.informationArea}>
        <Text style={styles.h1}> {city.nome} </Text>
        <Text style={styles.state}> {state.nome} - Brasil </Text>
        <GetHours />
      </View>

      <View>
        <View style={styles.image}>
          {imagePaths.map((imagePath, index) => (
            <Image
              key={index}
              source={imagePath}
              style={{ width: 200, height: 165 }}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
