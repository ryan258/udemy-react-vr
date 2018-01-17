import React, { Component } from "react";
import {
  AppRegistry,
  asset,
  Pano,
  View,
  Text,
  StyleSheet,
  Box
} from "react-vr";

export default class Basics extends Component {
  render() {
    return (
      <View>
        <Pano source={asset("starry-sky.jpg")} />
        <Box
          dimWidth={0.5}
          dimHeight={0.5}
          dimDepth={0.5}
          wireframe={true}
          style={{
            color: "#d22",
            transform: [
              { translate: [0, 0, -3] },
              { translateY: 1 },
              { translateX: -0.5 },
              { rotateY: 45 },
              { rotateZ: 45 }
            ]
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("Basics", () => Basics);
