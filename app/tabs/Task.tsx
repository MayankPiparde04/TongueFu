import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const TaskCard = ({ task, icon, color, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      accessibilityLabel={`Navigate to ${task}`}
    >
      <View
        className={`rounded-xl m-2 p-4 border-none flex-col items-center ${color}`}
      >
        <Icon name={icon} size={30} color="#fff" className="mb-2" />
        <Text className="text-white text-2xl font-semibold">{task}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Task = () => {
  const navigation = useNavigation();

  return (
    <View className="mt-6 mx-4 bg-neutral-950">
      <Text className="text-3xl text-gray-200 font-bold">Tasks</Text>
      <View className="flex-row flex-wrap justify-between mt-4">
        <View className="w-1/2">
          <TaskCard
            task="Task 1"
            icon="star"
            color="bg-red-600"
            onPress={() => navigation.navigate("tasks/Task1")}
          />
          <TaskCard
            task="Task 3"
            icon="flame"
            color="bg-green-600"
            onPress={() => navigation.navigate("tasks/Task3")}
          />
        </View>
        <View className="w-1/2">
          <TaskCard
            task="Task 2"
            icon="heart"
            color="bg-purple-600"
            onPress={() => navigation.navigate("tasks/Task2")}
          />
          <TaskCard
            task="Task 4"
            icon="rocket"
            color="bg-pink-600"
            onPress={() => navigation.navigate("tasks/Task4")}
          />
        </View>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({});
