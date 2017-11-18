import React, { Component } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { string, number, object, oneOfType } from "prop-types";

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  }
});

let defaultConfig = {
  duration: 1000,
  placeholder: null,
  blur: 1
};

class ProImage extends Component {
  static propTypes = {
    placeholder: oneOfType([number, object]),
    duration: number,
    initialImage: oneOfType([number, object]),
    image: oneOfType([number, object]).isRequired,
    resizeMode: string,
    style: oneOfType([number, object]),
    containerStyle: oneOfType([number, object])
  };

  static defaultProps = {
    placeholder: null,
    initialImage: null,
    duration: null,
    resizeMode: "cover",
    style: {},
    containerStyle: null
  };

  static setDefaultConfig = config => {
    defaultConfig = { ...defaultConfig, ...config };
  };

  state = {
    initialImageOpacity: new Animated.Value(1),
    imageOpacity: new Animated.Value(0)
  };

  onLoadEnd = () => {
    const duration = this.props.duration || defaultConfig.duration;
    Animated.sequence([
      Animated.timing(this.state.imageOpacity, {
        toValue: 1,
        duration
      }),
      Animated.timing(this.state.initialImageOpacity, {
        toValue: 0,
        duration: duration * 2
      })
    ]).start();
  };

  render() {
    const {
      resizeMode,
      style,
      containerStyle,
      initialImage,
      image
    } = this.props;
    const placeholder = this.props.placeholder || defaultConfig.placeholder;
    return (
      <View style={[styles.container, containerStyle]}>
        <Animated.Image
          blurRadius={initialImage ? defaultConfig.blur : 0}
          style={[
            styles.image,
            { opacity: this.state.initialImageOpacity },
            style
          ]}
          source={initialImage || placeholder}
          resizeMode={resizeMode || StyleSheet.flatten(style).resizeMode}
        />
        <Animated.Image
          onLoadEnd={this.onLoadEnd}
          style={[styles.image, { opacity: this.state.imageOpacity }, style]}
          source={image}
          resizeMode={resizeMode || StyleSheet.flatten(style).resizeMode}
        />
      </View>
    );
  }
}

export default ProImage;
