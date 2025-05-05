import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Profile from "../../assets/images/logo.png";

const DashHeader = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-row pt-12 bg-neutral-950 justify-between items-center px-4 py-2">
      <View className="gap-2">
        <Text className="text-4xl text-neutral-200 font-bold">
          Hello Mayank,
        </Text>
        <Text className="text-2xl text-neutral-200">Welcome Back</Text>
      </View>
      <View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate("tabs/Profile")}
          accessibilityLabel="Navigate to Profile"
          accessible={true}
        >
          <View className="border-2 border-indigo-500 rounded-full overflow-hidden">
            <Image
              source={Profile}
              className="w-24 h-24"
              resizeMode="contain"
              accessibilityLabel="User Profile"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashHeader;

const styles = StyleSheet.create({});
