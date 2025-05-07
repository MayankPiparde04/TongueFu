import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Link, useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    navigation.navigate("tabs/Details");
  };

  return (
    <View className="flex-1 justify-center items-center p-4 bg-neutral-950">
      <View className="bg-neutral-800 p-6 rounded-xl mb-4 w-full max-w-md">
        <Text className="text-4xl text-neutral-100 text-center font-bold pt-4 pb-4">
          Register your account
        </Text>
      </View>

      <View className="bg-neutral-800 p-6 rounded-xl mb-4 w-full max-w-md gap-4">
        <TextInput
          className="text-neutral-600 w-full text-2xl px-4 py-3 bg-neutral-200 rounded-xl shadow-md"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="#B0BEC5"
        />

        <TextInput
          className="text-neutral-600 w-full text-2xl px-4 py-3 bg-neutral-200 rounded-xl shadow-md"
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#B0BEC5"
        />

        <TextInput
          className="text-neutral-600 w-full text-2xl px-4 py-3 bg-neutral-200 rounded-xl shadow-md"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#B0BEC5"
        />

        <TextInput
          className="text-neutral-600 w-full text-2xl px-4 py-3 bg-neutral-200 rounded-xl shadow-md"
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholderTextColor="#B0BEC5"
        />
      </View>

      <View className="flex flex-row h-10 w-full items-center justify-end pr-4">
        <Text className="text-xl text-neutral-100">
          Already have an account?{" "}
          <Link to="/tabs/Login">
            <Text className="text-blue-600 text-xl">Login</Text>
          </Link>
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleRegister}
        className="mt-4"
      >
        <View className="h-16 w-52 mt-4 bg-neutral-500 rounded-xl items-center justify-center shadow-md">
          <Text className="text-neutral-100 font-semibold text-center text-3xl">
            Register
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
