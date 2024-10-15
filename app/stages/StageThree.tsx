import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";

const StageThree = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const [selectedSoundDifficulty, setSelectedSoundDifficulty] = useState("");

  const soundOptions = [
    { label: "K - key", value: "k" },
    { label: "P - pay", value: "p" },
    { label: "S - say", value: "s" },
    { label: "None", value: "none" },
  ];

  const toggleDropdown = () => {
    setOpenDropdown(openDropdown === "sound" ? null : "sound");
  };

  const handleSelectSoundDifficulty = (value) => {
    setSelectedSoundDifficulty(value);
    setOpenDropdown(null); // Close dropdown
  };

  return (
    <View className="p-4 flex-1 justify-center items-center bg-white w-full">
      {/* Sound Difficulty Section */}
      <View className="bg-green-400 p-6 rounded-[30px] mb-4 w-full">
        <Text className="text-3xl font-bold mb-2">
          Do you face difficulty in any of the below sounds?
        </Text>
        <Text className="text-xl mb-2 py-1 text-gray-100">
          It is always changeable later on.
        </Text>
        
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={toggleDropdown}
          className="border border-green-400 bg-green-100 p-3 mb-2 rounded-2xl"
        >
          <Text className="text-gray-700 text-xl px-4 bg-white py-3 rounded-2xl">
            {selectedSoundDifficulty || "Select sound difficulty"}
          </Text>
        </TouchableOpacity>

        {openDropdown === "sound" && (
          <View className="border border-green-400 rounded-2xl mt-1 mb-4 py-2 bg-white max-h-36">
            <FlatList
              data={soundOptions}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleSelectSoundDifficulty(item.label)}
                  className="border-b border-green-200"
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

export default StageThree;

