import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import IMG1 from "../assets/images/welcome-img.png";

const WelcomePage = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    console.log("Get Started pressed!");
    navigation.navigate("tabs/Registermethod");
  };

  return (
    <SafeAreaView className="flex-1 bg-neutral-950 p-4">
      <View className="flex flex-col items-center justify-center flex-1 gap-5 pb-6">
        <View className="flex justify-center items-center mb-2 pt-6 mt-2">
          <Text className="text-3xl text-neutral-100 font-bold text-center px-4 md:px-12">
            Master Your Speech with
          </Text>
          <Text className="italic font-serif font-bold text-6xl md:text-7xl text-teal-400 pt-6">
            TongueFu
          </Text>
        </View>
        <Image
          source={IMG1}
          className="w-96 object-contain aspect-square h-96 mb-12 -mt-5"
          resizeMode="contain"
          accessibilityLabel="Welcome image for TongueFu"
        />
        <View className="px-4">
          <Text className="text-center text-2xl md:text-3xl text-neutral-100">
            Start Your Journey to Fluent, Confident Communication.
          </Text>
        </View>
        <TouchableOpacity onPress={handleGetStarted} activeOpacity={0.9}>
          <View className="mt-4 h-16 w-52 sm:w-44 bg-teal-200 rounded-2xl items-center justify-center shadow-md shadow-teal-400">
            <Text className="text-teal-800 text-3xl md:text-4xl font-semibold">
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;
