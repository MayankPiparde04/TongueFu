import React, { useState } from "react";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { useNavigation, Link } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    navigation.navigate("tabs/Home");
  };

  return (
    <View className="flex-1 justify-center items-center p-4 bg-neutral-950">
      <View className="bg-gray-950 p-6 rounded-xl mb-4 w-full max-w-md">
        <Text className="text-4xl text-gray-200 text-center font-bold pt-4 pb-4">
          Login to your account
        </Text>
      </View>

      <View className="bg-gray-950 p-6 rounded-xl mb-4 w-full max-w-md gap-4">
        <TextInput
          className="text-gray-300 w-full text-2xl px-4 py-3 bg-gray-600 rounded-xl shadow-md"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="#B0BEC5"
        />

        <TextInput
          className="text-gray-300 w-full text-2xl px-4 py-3 bg-gray-600 rounded-xl shadow-md"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#B0BEC5"
        />
      </View>

      <View className="flex flex-row h-10 w-full items-center justify-end pr-4">
        <Text className="text-xl text-gray-200">
          Don't have an account?{" "}
          <Link to="/tabs/Register">
            <Text className="text-blue-600 text-xl">Register</Text>
          </Link>
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handleLogin}
        className="mt-4"
      >
        <View className="h-16 w-52 mt-4 bg-indigo-900 rounded-xl items-center justify-center shadow-md">
          <Text className="text-gray-200 font-semibold text-center text-3xl">
            Login
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
