import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface HomeProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-2xl font-bold mb-4">Welcome to Home!</Text>
      <View className="space-y-4">
        <TouchableOpacity
          onPress={() => navigation.navigate("login")} // Capitalized
          className="bg-blue-500 py-2 px-4 rounded"
        >
          <Text className="text-blue-700 text-2xl text-center">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("register")} // Capitalized
          className="bg-blue-500 py-2 px-4 rounded"
        >
          <Text className="text-blue-700 text-2xl text-center">Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("profile")} // Capitalized
          className="bg-blue-500 py-2 px-4 rounded"
        >
          <Text className="text-blue-700 text-2xl text-center">Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("welcomepage")} // Capitalized
          className="bg-blue-500 py-2 px-4 rounded"
        >
          <Text className="text-blue-700 text-2xl text-center">Welcome Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
