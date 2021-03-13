import { Octicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const window = Dimensions.get("window");

const Slider = (props) => {
  const [position, setPosition] = useState(0);
  const [fullMode, setFullMode] = useState(false);
  const [width, setWidth] = useState(props.width);
  const [height, setHeight] = useState(props.height);

  const { images, maxNum, indicatorSize } = props;

  const onScrollHandler = ({ nativeEvent }) => {
    let slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide > maxNum) slide = maxNum;
    if (position !== slide) {
      setPosition(slide);
    }
  };
  const onItemPressHandler = () => {
    if (fullMode) {
      setWidth(props.width);
      setHeight(props.height);
    } else {
      setWidth(window.width);
      setHeight(window.height);
    }
    setFullMode((previous) => !previous);
  };
  return (
    <View style={{ width: width, height: height }}>
      <ScrollView
        {...props}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScrollHandler}
        scrollEventThrottle={1}
      >
        {images.map((image, index) => (
          <TouchableOpacity onPress={onItemPressHandler}>
            <Image
              key={index}
              source={{ uri: image }}
              style={{ width: width, height: height }}
            />
          </TouchableOpacity>
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
          } else if (k == maxNum) {
            return (
              <EvilIcons
                name="plus"
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
