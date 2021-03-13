import { Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";

const Slider = (props) => {
  const [position, setPosition] = useState(0);

  const { images, width, height, maxNum, indicatorSize } = props;

  const onScrollHandler = ({ nativeEvent }) => {
    let slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide >= maxNum) slide = maxNum - 1;
    if (position !== slide) {
      setPosition(slide);
    }
  };
  return (
    <View style={{ width: width, height: height }}>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScrollHandler}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{ width: width, height: height }}
          />
        ))}
      </ScrollView>
      <View style={styles.indicators}>
        {images.map((v, k) => {
          if (k < maxNum) {
            return (
              <Octicons
                name="primitive-dot"
                key={k}
                size={position === k ? indicatorSize : (indicatorSize * 2) / 3}
                style={
                  position === k ? styles.activeIndicator : styles.indicator
                }
              />
            );
          }
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  indicators: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    margin: 5,
    color: "#888",
  },
  activeIndicator: {
    marginHorizontal: 5,
    color: "white",
  },
});
export default Slider;
