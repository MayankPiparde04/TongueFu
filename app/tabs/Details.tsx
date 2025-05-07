import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import StageOne from "../stages/StageOne";
import StageTwo from "../stages/StageTwo";
import StageThree from "../stages/StageThree";
import StageFour from "../stages/StageFour";

const Details = () => {
  const navigation = useNavigation();
  const [activeStage, setActiveStage] = useState(0);

  const handleContinue = () => {
    if (activeStage === 3) {
      navigation.navigate("tabs/VoiceCalibration");
    } else {
      setActiveStage((prev) => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setActiveStage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <View className="flex-1 bg-neutral-950 justify-between">
      <View className="flex-1">
        {activeStage === 0 && <StageOne />}
        {activeStage === 1 && <StageTwo />}
        {activeStage === 2 && <StageThree />}
        {activeStage === 3 && <StageFour />}
      </View>

      <View className="flex-row justify-evenly h-20 items-center w-full pb-16">
        {activeStage > 0 && (
          <TouchableOpacity
            activeOpacity={0.9}
            className={`rounded ${
              activeStage === 1 ? "bg-gray-300" : "bg-gray-400"
            }`}
            onPress={handleBack}
          >
            <View className="h-16 bg-orange-400 rounded-2xl items-center justify-center w-36">
              <Text className="text-black text-center text-2xl">Back</Text>
            </View>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          activeOpacity={0.9}
          className={`rounded ${
            activeStage === 3 ? "bg-gray-300" : "bg-blue-700"
          }`}
          onPress={handleContinue}
        >
          <View className="h-16 bg-indigo-300 rounded-2xl items-center justify-center w-36">
            <Text className="text-indigo-950 font-semibold text-center text-2xl">
              {activeStage === 3 ? "Done" : "Continue"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
