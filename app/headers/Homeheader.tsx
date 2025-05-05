import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import LOGO from "../../assets/images/logo.png";
import Profile from "../../assets/images/react-logo.png";
import { useNavigation } from "expo-router";

const HomeHeader = () => {
  const navigation = useNavigation();

  return (
    <View className="p-4 bg-neutral-950 flex-row items-center justify-between w-full pt-8">
      <View>
        <Image
          source={LOGO}
          className="w-24 h-24"
          resizeMode="contain"
          accessibilityLabel="App Logo"
        />
      </View>
      <View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate("tabs/Profile");
          }}
        >
          <Image
            source={Profile}
            className="w-20 h-20 rounded-full"
            resizeMode="contain"
            accessibilityLabel="User Profile"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
