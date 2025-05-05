import { Text, View, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";

const StageFour = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const [dailyGoal, setDailyGoal] = useState("");

  const dailyGoals = [
    { label: "5 mins", value: "5" },
    { label: "10 mins", value: "10" },
    { label: "15 mins", value: "15" },
    { label: "30 mins", value: "30" },
  ];

  const toggleDropdown = () => {
    setOpenDropdown(openDropdown === "dailyGoal" ? null : "dailyGoal");
  };

  const handleSelectDailyGoal = (value) => {
    setDailyGoal(value);
    setOpenDropdown(null); // Close dropdown
  };

  return (
    <View className="flex-1 justify-center items-center p-4 flex min-w-full">
      {/* Daily Goal Section */}
      <View className="bg-pink-600 p-6 rounded-[30px] mb-4 w-full">
        <Text className="text-4xl text-gray-900 font-bold mb-2">
          What will be your daily goal?
        </Text>
        <Text className="text-xl  mb-2 py-1 text-gray-200">
          This will help you achieve fluency soon!
        </Text>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={toggleDropdown}
          className="border border-pink-500 bg-pink-100 p-3 mb-2 rounded-2xl"
        >
          <Text className="text-gray-200 text-xl px-4 bg-gray-900 py-3 rounded-2xl">
            {dailyGoal || "Select daily goal"}
          </Text>
        </TouchableOpacity>

        {openDropdown === "dailyGoal" && (
          <View className="border border-yellow-400 rounded-2xl mt-1 mb-4 bg-gray-900 max-h-40 overflow-hidden">
            <FlatList
              data={dailyGoals}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => handleSelectDailyGoal(item.label)}
                  className="border-b border-gree-200"
                >
                  <Text className="text-gray-200 text-xl py-2 px-4">
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false}
              style={{ maxHeight: 120 }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default StageFour;
