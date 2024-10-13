import { View, Image } from "react-native";
import React from "react";
import LOGO from "../assets/images/logo.png";

const HomeHeader = () => {
  return (
    <View className="p-4 bg-white flex-row items-center w-full mt-8">
      <Image
        source={LOGO}
        className="w-24 h-24"
        resizeMode="contain"
        accessibilityLabel="App Logo"
      />
    </View>
  );
};

export default HomeHeader;
