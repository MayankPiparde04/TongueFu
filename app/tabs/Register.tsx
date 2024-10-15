import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center p-4 bg-white">
      <View className="bg-emerald-400 items-center p-6 rounded-[30px] mb-4 w-full  gap-4">
        <Text className="text-5xl text-gray-800 text-center font-bold mb-4">
          Register
        </Text>

        <TextInput
          className="text-gray-700 w-full text-2xl px-4 bg-white py-3 rounded-2xl shadow-black shadow-sm"
          placeholder="Username"
        />

        <TextInput
          className="text-gray-700 w-full text-2xl px-4 bg-white py-3 rounded-2xl shadow-black shadow-sm"
          placeholder="Email"
          keyboardType="email-address"
        />

        <TextInput
          className="text-gray-700 w-full text-2xl px-4 bg-white py-3 rounded-2xl shadow-black shadow-sm"
          placeholder="Password"
          secureTextEntry
        />
        <TextInput
          className="text-gray-700 w-full text-2xl px-4 bg-white py-3 rounded-2xl shadow-black shadow-sm"
          placeholder="Confirm Password"
          secureTextEntry
        />
        <View className="flex flex-row h-10 w-full items-center justify-end pr-4">
          <Text className="text-xl">
            Already have an account?{" "}
            <Link to="/tabs/Login">
              <Text className="text-blue-600 text-xl">Login</Text>
            </Link>
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}
          onPress={() => {
            navigation.navigate("tabs/Details");
          }}
          className="items-center justify-center "
        >
          <View className="h-16 w-48 mt-4 bg-blue-400 rounded-2xl items-center justify-center shadow-black shadow-sm">
            <Text className="text-white font-semibold text-center text-3xl">
              Register
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
