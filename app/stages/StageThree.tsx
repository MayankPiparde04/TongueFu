import { Text, View, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";

const StageThree = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
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
    setOpenDropdown(null);
  };

  return (
    <View className="p-4 flex flex-1 min-w-full justify-center items-center">
      <View className="bg-green-600 p-6 rounded-[30px] mb-4 w-full">
        <Text className="text-4xl text-gray-900 font-bold mb-2">
          Do you face difficulty in any of the below sounds?
        </Text>
        <Text className="text-xl  mb-2 py-1 text-gray-200">
          It is always changeable later on.
        </Text>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={toggleDropdown}        >
          <Text className="text-gray-200 text-xl px-4 bg-gray-900 py-3 rounded-2xl">
            {selectedSoundDifficulty || "Select sound difficulty"}
          </Text>
        </TouchableOpacity>

        {openDropdown === "sound" && (
          <View className="border border-blue-400 rounded-2xl mt-1 mb-4 bg-gray-900 max-h-40 overflow-hidden">
            <FlatList
              data={soundOptions}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => handleSelectSoundDifficulty(item.label)}
                  className="border-b border-green-200"
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

export default StageThree;
