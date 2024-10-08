import { StyleSheet, Text, View } from "react-native";
import React from "react";
import "../global.css"; // Ensure this is configured properly for React Native

export default function Layout() {
  return (
    <View className="flex-1">
      <Text className="bg-blue-200">_layout</Text>
      <Text className="bg-red-200">_layout</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // If you need specific styles, add them here
});
