import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import IMG1 from "../assets/images/welcome-img.png";

const WelcomePage = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    console.log("Get Started pressed!");
    navigation.navigate("tabs/Register_method");
  };

  return (
    <SafeAreaView className="flex-1 justify-between bg-white ">
      <View className="flex-col items-center ">
        <View className="flex-row w-full justify-start items-start mt-8 px-8">
          <Text className="text-2xl text-neutral-900">Welcome!</Text>
        </View>
        <View className="flex justify-center items-center mx-16 mb-4 pb-6 pt-2">
          <Text className="text-4xl font-bold  text-center px-4">
            Master Your Speech with “
            <Text className="italic font-bold text-blue-500">TongueFu</Text>”
          </Text>
        </View>
        <Image
          source={IMG1}
          className="w-[90%] object-contain mb-4"
          resizeMode="contain"
          accessibilityLabel="Welcome image for TongueFu"
        />
        <View className="px-4 m-2">
          <Text className="mx-16 my-4 text-center text-2xl text-wrap">
            “Start Your Journey to Fluent, Confident Communication."
          </Text>
        </View>
        <TouchableOpacity onPress={handleGetStarted} activeOpacity={0.7}>
          <View className="mt-4 h-16 w-96 bg-blue-400 rounded-lg items-center justify-center">
            <Text className="text-white text-3xl font-semibold">
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;
