import React, { memo } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import Tasks from './Task'

const ProgressBar = memo(({ progress }) => (
  <View
    className="w-full h-2 bg-gray-300 rounded"
    accessibilityRole="progressbar"
  >
    <View
      className="h-full bg-teal-400 rounded"
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
    <ScrollView className="bg-white">
      <View className="bg-blue-600 mx-4 mt-6 p-4 rounded-2xl gap-2">
        <Text className="text-3xl text-white font-bold">
          Track Your Progress
        </Text>
        <Text className="mb-2 text-xl text-white font-semibold">
          Progress: 70%
        </Text>
        <ProgressBar progress={70} />
        <TouchableOpacity
          onPress={() => navigateToTask("tabs/Dashboard")}
          className="mt-2 self-end"
        >
          <View className="fleex items-end pt-2">
            <Text className="text-teal-200">See more {"->"}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View className="mt-6 mx-4">
        <Tasks/>
        {/* <View className="flex-row flex-wrap justify-between mt-4">
          <View className="w-1/2">
            <TouchableOpacity
              onPress={() => navigateToTask("tasks/Task1")}
              accessibilityLabel="Navigate to Task 1"
            >
              <View className="rounded-xl m-2 p-4 border-none flex-col items-center bg-red-500">
                <Icon name="star" size={30} color="#fff" className="mb-2" />
                <Text className="text-white text-2xl font-semibold">
                  Task 1
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateToTask("tasks/Task3")}
              accessibilityLabel="Navigate to Task 3"
            >
              <View className="rounded-xl m-2 p-4 border-none flex-col items-center bg-green-500">
                <Icon name="flame" size={30} color="#fff" className="mb-2" />
                <Text className="text-white text-2xl font-semibold">
                  Task 3
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="w-1/2">
            <TouchableOpacity
              onPress={() => navigateToTask("tasks/Task2")}
              accessibilityLabel="Navigate to Task 2"
            >
              <View className="rounded-xl m-2 p-4 border-none flex-col items-center bg-blue-500">
                <Icon name="heart" size={30} color="#fff" className="mb-2" />
                <Text className="text-white text-2xl font-semibold">
                  Task 2
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateToTask("tasks/Task4")}
              accessibilityLabel="Navigate to Task 4"
            >
              <View className="rounded-xl m-2 p-4 border-none flex-col items-center bg-yellow-500">
                <Icon name="rocket" size={30} color="#fff" className="mb-2" />
                <Text className="text-white text-2xl font-semibold">
                  Task 4
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View> */}
      </View>
    </ScrollView>
  );
};

export default Home;
