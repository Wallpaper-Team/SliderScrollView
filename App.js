import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Slider from "./components/Slider";

const images = [
  "https://images.pexels.com/photos/6051055/pexels-photo-6051055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/6136879/pexels-photo-6136879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/5566994/pexels-photo-5566994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/5232570/pexels-photo-5232570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const App = (props) => {
  return (
    <View style={styles.container}>
      <Slider images={images} indicatorSize={24} width={width} height={width} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
