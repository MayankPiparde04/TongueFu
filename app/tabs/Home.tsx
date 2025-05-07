import React, { memo } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Tasks from "./Task";

const ProgressBar = memo(({ progress }) => (
  <View
    className="w-full h-2 bg-gray-300 rounded"
    accessibilityRole="progressbar"
  >
    <View
      className="h-full bg-neutral-400 rounded"
      style={{ width: `${progress}%` }}
      accessibilityLabel={`Progress: ${progress}%`}
    />
  </View>
));

const Home = () => {
  const navigation = useNavigation();

  const navigateToTask = (task) => {
    try {
      navigation.navigate(task);
    } catch (error) {
      console.error("Navigation Error:", error);
    }
  };

  return (
    <ScrollView className="bg-neutral-950">
      <View className="bg-blue-600 mx-4 mt-6 p-4 rounded-2xl gap-2">
        <Text className="text-3xl text-gray-100 font-bold">
          Track Your Progress
        </Text>
        <Text className="mb-2 text-xl text-gray-200 font-semibold">
          Progress: 70%
        </Text>
        <ProgressBar progress={70} />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigateToTask("tabs/Dashboard")}
          className="mt-2 self-end"
        >
          <View className="fleex items-end pt-2">
            <Text className="text-neutral-200">See more {"->"}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Tasks />
    </ScrollView>
  );
};

export default Home;
