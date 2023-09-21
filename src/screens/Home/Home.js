import * as React from "react";
import { styles } from "./Style";
import { View, Text, Button, Image} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import GetHours from "../../utils/GetHours";


export default function Home() {
  const navigation = useNavigation();
  const route = useRoute();

  const { city, state } = route.params;

  const imagePaths = [
    require("exemple-app/assets/images/home/cloud.png"),
    require("exemple-app/assets/images/home/cloudMoon.png"),
    require("exemple-app/assets/images/home/cloudRain.png"),
    require("exemple-app/assets/images/home/cloudSun.png"),
    require("exemple-app/assets/images/home/sun.png"),
  ];

  return (
    <View style={styles.container}>
      <View>
        <Button
          title="voltar"
          onPress={() => navigation.navigate("SearchCityScreen")}
        />
      </View>
      <View style={styles.informationArea}>
        <Text style={styles.h1}> {city.nome} </Text>
        <Text> {state.nome} - Brasil </Text>
        <GetHours />
      </View>
      <View>
        <View>
          {imagePaths.map((imagePath, index) => (
            <Image
              key={index}
              source={imagePath}
              style={{ width: 200, height: 130 }}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
