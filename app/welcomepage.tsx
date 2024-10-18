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
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex flex-col items-center justify-center h-full gap-5 pb-12">
        <View className="flex justify-center items-center mx-4 mb-4 pb-6 pt-6">
          <Text className="text-3xl font-bold text-center px-12">
            Master Your Speech with
          </Text>
          <Text className="italic font-bold text-7xl text-teal-600 pt-2">
            TongueFu
          </Text>
        </View>
        <Image
          source={IMG1}
          className="w-[90%] object-contain mb-10"
          resizeMode="contain"
          accessibilityLabel="Welcome image for TongueFu"
        />
        <View className="px-4 m-2">
          <Text className="mx-4 my-4 text-center text-2xl">
            Start Your Journey to Fluent, Confident Communication.
          </Text>
        </View>
        <TouchableOpacity onPress={handleGetStarted} activeOpacity={0.7}>
          <View className="mt-4 h-16 w-80 bg-teal-600 rounded-2xl items-center justify-center shadow-md shadow-black">
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
