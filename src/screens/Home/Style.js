import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2E5E7",
    flexDirection: "column",
  },
  barsView:{
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 40,
    marginRight: 30
  },
  h1: {
    fontSize: 35,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
  },
  informationArea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    gap: 5,
  },
  state: {
    fontSize: 15,
  }
});
