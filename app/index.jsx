import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

const index = () => {
  return (
    <View className="bg-neutral-950">
      <ActivityIndicator size={"large"} className="bg-teal-400" />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
