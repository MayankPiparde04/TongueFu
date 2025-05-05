import { View, Image } from "react-native";
import React from "react";
import LOGO from "../../assets/images/logo.png";

const HomeHeader = () => {
  return (
    <View className="p-4 bg-neutral-950 flex-row items-center w-full pt-8">
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
