import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";

const StageTwo = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const years = Array.from(
    { length: new Date().getFullYear() - 1950 + 1 },
    (_, i) => 1950 + i
  );
  const months = [
    "January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October",
    "November", "December",
  ];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleSelectBirthYear = (year) => {
    setBirthYear(year);
    setOpenDropdown(null); // Close dropdown
  };

  const handleSelectBirthMonth = (month) => {
    setBirthMonth(month);
    setOpenDropdown(null); // Close dropdown
  };

  const handleSelectBirthDate = (date) => {
    setBirthDate(date);
    setOpenDropdown(null); // Close dropdown
  };

  return (
    <View className="p-4 flex-1 min-w-full justify-center items-center bg-white">
      {/* Date of Birth Section */}
      <View className="bg-purple-400 p-6 rounded-[30px] mb-4 w-full">
        <Text className="text-3xl font-bold mb-2">
          Tell us your date of birth?
        </Text>
        <Text className="text-xl mb-2 py-1 text-gray-100">
          We can recommend better exercises according to your age.
        </Text>

        <View className="gap-2">
          {/* Year Dropdown */}
          <TouchableOpacity activeOpacity={0.7}
            onPress={() => toggleDropdown('year')}
            className="border border-purple-500 bg-purple-100 p-3 mb-2 rounded-2xl"
          >
            <Text className="text-gray-700 text-xl px-4 bg-white py-3 rounded-2xl">
              {birthYear || "Select your birth year!"}
            </Text>
          </TouchableOpacity>

          {openDropdown === 'year' && (
            <View className="border border-teal-400 rounded-2xl mt-1 mb-4 bg-white max-h-36">
              <FlatList
                data={years}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity activeOpacity={0.7}
                    onPress={() => handleSelectBirthYear(item)}
                    className="border-b border-teal-200"
                  >
                    <Text className="text-gray-800 py-2 px-4 text-xl">{item}</Text>
                  </TouchableOpacity>
                )}
                style={{ maxHeight: 120 }} // Adjust height for three items
                showsVerticalScrollIndicator={false} // Hide the scrollbar
              />
            </View>
          )}

          {/* Month Dropdown */}
          <TouchableOpacity activeOpacity={0.7}
            onPress={() => toggleDropdown('month')}
            className="border border-yellow-500 bg-yellow-100 p-3 mb-2 rounded-2xl"
          >
            <Text className="text-gray-700 text-xl px-4 bg-white py-3 rounded-2xl">
              {birthMonth || "Select your birth month!"}
            </Text>
          </TouchableOpacity>

          {openDropdown === 'month' && (
            <View className="border border-yellow-400 rounded-2xl mt-1 mb-4 bg-white max-h-36">
              <FlatList
                data={months}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity activeOpacity={0.7}
                    onPress={() => handleSelectBirthMonth(item)}
                    className="border-b border-yellow-200"
                  >
                    <Text className="text-gray-800 py-2 px-4 text-xl">{item}</Text>
                  </TouchableOpacity>
                )}
                style={{ maxHeight: 120 }} // Adjust height for three items
                showsVerticalScrollIndicator={false} // Hide the scrollbar
              />
            </View>
          )}

          {/* Date Dropdown */}
          <TouchableOpacity activeOpacity={0.7}
            onPress={() => toggleDropdown('date')}
            className="border border-red-500 bg-red-100 p-3 mb-2 rounded-2xl"
          >
            <Text className="text-gray-700 text-xl px-4 bg-white py-3 rounded-2xl">
              {birthDate || "Select your birth date!"}
            </Text>
          </TouchableOpacity>

          {openDropdown === 'date' && (
            <View className="border border-red-400 rounded-2xl mt-1 mb-4 bg-white max-h-36">
              <FlatList
                data={dates}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity activeOpacity={0.7}
                    onPress={() => handleSelectBirthDate(item)}
                    className="border-b border-red-200"
                  >
                    <Text className="text-gray-800 py-2 px-4 text-xl">{item}</Text>
                  </TouchableOpacity>
                )}
                style={{ maxHeight: 120 }} // Adjust height for three items
                showsVerticalScrollIndicator={false} // Hide the scrollbar
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default StageTwo;
