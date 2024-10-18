import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import LOGO from "../../assets/images/logo.png";
import Profile from "../../assets/images/react-logo.png";
import { useNavigation } from "expo-router";

const HomeHeader = () => {
  const navigation = useNavigation();

  return (
    <View className="p-4 bg-white flex-row items-center justify-between w-full mt-8">
      <View>
        <Image
          source={LOGO}
          className="w-24 h-24"
          resizeMode="contain"
          accessibilityLabel="App Logo"
        />
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.7} onPress={()=>{navigation.navigate("tabs/Profile")}}>
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
