import {
  View,
  Text,
  Image,
  StatusBar,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./Style";
import {
  useFonts,
  RobotoCondensed_400Regular,
} from "@expo-google-fonts/roboto-condensed";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import GetHours from "../../utils/GetHours";
import Clocks from "../../utils/Clocks";
import api from "../../services/Api/Api.js";

export default function SearchCityScreen() {
  const navigation = useNavigation();

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedUF, setSelectedUF] = useState(null);

  function navegaSobre() {
    navigation.navigate("Home", { city: selectedCity, state: selectedUF });
  }

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (selectedCity && selectedUF) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [selectedCity, selectedUF]);

  const fetchCitiesFromAPI = async () => {
    try {
      const response = await api.get("api/v1/localidades/distritos");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  const fetchStatesFromAPI = async () => {
    try {
      const response = await api.get("api/v1/localidades/estados");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetchCitiesFromAPI().then((data) => {
      setCities(data);
    });
    fetchStatesFromAPI().then((data) => {
      setStates(data);
    });
  }, []);

  const [isFocus, setIsFocus] = useState(true);

  const [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      resetScrollToCoords={{ x: 7, y: 9 }}
      scrollEnabled={true}
    >
      <StatusBar
        translucent={true}
        backgroundColor={"rgba(0, 0, 0, 0)"}
        barStyle="light-content"
      />
      <LinearGradient
        style={styles.backgroundContainer}
        colors={["#4892BC", "transparent"]}
      />

      <View style={[styles.viewWeather]}>
        <Text style={styles.h1}>
          Weather Up <FontAwesome name="thermometer-3" size={25} />
        </Text>
        <GetHours />
        <Image
          source={require("../../../assets/images/searchCityScreen/Weather.png")}
          style={{ width: 200, height: 130 }}
        ></Image>
        <Image
          source={require("../../../assets/images/searchCityScreen/Ellipse.png")}
          style={{ marginLeft: 47, marginTop: 10 }}
        ></Image>
      </View>

      <View style={styles.newContent}>
        <View style={styles.viewSearch}>
          <Text style={styles.label}>Selecione sua cidade e estado</Text>
          <View style={styles.dropdownContainer}>
            <Dropdown
              style={[styles.dropdownUF, isFocus && { borderColor: "blue" }]}
              data={states}
              search
              maxHeight={300}
              labelField="sigla"
              valueField="id"
              placeholder={"UF"}
              searchPlaceholder="Pesquisar"
              value={selectedUF}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setSelectedUF(item);
                setIsFocus(false);
              }}
            />
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              data={cities}
              search
              maxHeight={300}
              labelField="nome"
              valueField="id"
              placeholder={"Selecione a cidade"}
              searchPlaceholder="Pesquisar"
              value={selectedCity}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setSelectedCity(item);
                setIsFocus(false);
              }}
            />
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.viewButton}>
            <Pressable
              style={[
                styles.buttonPressable,
                isButtonDisabled && styles.disabledButton,
              ]}
              onPress={navegaSobre}
              disabled={isButtonDisabled}
            >
              <Text>go</Text>
            </Pressable>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}