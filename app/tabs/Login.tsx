import { TextInput, Button, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-2xl mb-4">Login</Text>
      <TextInput
        className="border border-gray-300 rounded p-2 mb-4 w-full"
        placeholder="Username"
      />
      <TextInput
        className="border border-gray-300 rounded p-2 mb-4 w-full"
        placeholder="Password"
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("tabs/Home");
        }}
      />
    </View>
  );
};

export default Login;
