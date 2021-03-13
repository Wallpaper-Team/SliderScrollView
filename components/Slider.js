import { Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";

const Slider = (props) => {
  const [position, setPosition] = useState(0);

  const onScrollHandler = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (position !== slide) {
      setPosition(slide);
    }
  };
  return (
    <View style={{ width: props.width, height: props.height }}>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScrollHandler}
      >
        {props.images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{ width: props.width, height: props.height }}
          />
        ))}
      </ScrollView>
      <View style={styles.indicators}>
        {props.images.map((v, k) => (
          <Octicons
            name="primitive-dot"
            key={k}
            size={
              position === k
                ? props.indicatorSize
                : (props.indicatorSize * 2) / 3
            }
            style={position === k ? styles.activeIndicator : styles.indicator}
          />
        ))}
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
