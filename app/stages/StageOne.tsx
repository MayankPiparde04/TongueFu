import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";

const StageOne = () => {
  const [openDropdown, setOpenDropdown] = useState(false); // Track dropdown state
  const [selectedExperience, setSelectedExperience] = useState("");

  const experienceOptions = [
    { label: "0-3 months", value: "0-3" },
    { label: "3-12 months", value: "3-12" },
    { label: "More than 12 months", value: "more_than_12" },
    { label: "None", value: "none" },
  ];

  const toggleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

  const handleSelectExperience = (value) => {
    setSelectedExperience(value);
    setOpenDropdown(false); // Close dropdown after selection
  };

  return (
    <View className="p-4 flex-1 w-full justify-center items-center bg-white">
      {/* Experience Section */}
      <View className="bg-blue-400 p-6 rounded-[30px] mb-4 w-full">
        <Text className="text-3xl font-bold mb-2">
          What prior experience do you have in speech therapy?
        </Text>
        <Text className="text-xl mb-2 py-1 text-gray-100">
          This is just to adjust your training plan.
        </Text>
        
        <TouchableOpacity activeOpacity={0.7} onPress={toggleDropdown}>
          <Text className="text-gray-700 text-xl px-4 bg-white py-3 rounded-2xl">
            {selectedExperience || "Select experience"}
          </Text>
        </TouchableOpacity>

        {openDropdown && (
          <View className="border border-blue-400 rounded-2xl mt-1 mb-4 bg-white max-h-40 overflow-hidden">
            <FlatList
              data={experienceOptions}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleSelectExperience(item.label)}
                  className="border-b border-blue-200"
                >
                  <Text className="text-gray-800 text-xl py-2 px-4">{item.label}</Text>
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false} // Hide the scrollbar
              style={{ maxHeight: 120 }} // Limit height to show only 3 options
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default StageOne;
