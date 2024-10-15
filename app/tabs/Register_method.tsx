import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import LOGO from "../../assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";

const RegisterMethod = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 p-4 items-center justify-evenly bg-white">
      <View className="mx-2 items-center">
        <Image
          source={LOGO}
          className="w-36 h-36"
          resizeMode="contain"
          accessibilityLabel="App Logo"
        />
        <View className="flex justify-center items-center mx-12 mb-4 pb-6 pt-2">
          <Text className="text-3xl font-bold  text-center px-4">
            Unlock your personalized training plan
          </Text>
        </View>
      </View>

      <View className="gap-2">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("tabs/Register")}
        >
          <View className="mt-4 h-14 w-96 bg-blue-400 rounded-lg items-center justify-center">
            <Text
              className="text-white text-2xl font-semibold"
              accessibilityLabel="Sign Up with Google"
            >
              Sign Up with Google
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("tabs/Register")}
        >
          <View className="mt-4 h-14 w-96 bg-green-400 rounded-lg items-center justify-center">
            <Text
              className="text-white text-2xl font-semibold"
              accessibilityLabel="Sign Up with Facebook"
            >
              Sign Up with Facebook
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("tabs/Register")}
        >
          <View className="mt-4 h-14 w-96 bg-red-400 rounded-lg items-center justify-center">
            <Text
              className="text-white text-2xl font-semibold"
              accessibilityLabel="Sign Up with Email"
            >
              Sign Up with Email
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("tabs/Register")}
        >
          <View className="mt-4 h-14 w-96 bg-black rounded-lg items-center justify-center">
            <Text
              className="text-white text-2xl font-semibold"
              accessibilityLabel="Sign Up with Phone"
            >
              Sign Up with Phone
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterMethod;
