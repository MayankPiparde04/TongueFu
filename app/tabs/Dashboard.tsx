import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();

  const navigateTo = (task) => {
    navigation.navigate(task);
  };

  return (
    <View className="flex-1 p-4 bg-gray-100">
      <View className="flex-row justify-between">
        <TouchableOpacity
          className="bg-blue-500 p-6 rounded-lg shadow-lg m-2"
          onPress={() => navigateTo("tasks/Task1")}
        >
          <Text className="text-white text-lg text-center">Task 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-green-500 p-6 rounded-lg shadow-lg m-2"
          onPress={() => navigateTo("tasks/Task2")}
        >
          <Text className="text-white text-lg text-center">Task 2</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-between">
        <TouchableOpacity
          className=" p-6 rounded-lg shadow-lg m-2"
          onPress={() => navigateTo("tasks/Task3")}
        >
          <Text className="text-white text-lg text-center">Task 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="text-white bg-red-500 p-6 rounded-lg shadow-lg m-2"
          onPress={() => navigateTo("tasks/Task4")}
        >
          <Text className="text-white text-lg text-center">Task 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;