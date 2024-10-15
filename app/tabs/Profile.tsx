import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import statesAndUTs from "./states";

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState({
    state: "",
    district: "",
    address1: "",
    address2: "",
    pincode: "",
  });

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePicture(result.assets[0].uri);
    }
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log("User logged out");
  };

  return (
    <ScrollView>
      <View className="flex-1 justify-center items-center p-4 bg-white">
        {/* <View className="bg-emerald-400 p-6 rounded-[30px] mb-4 w-full gap-1"> */}
        {/* Profile Picture */}
        <View className="flex justify-center items-center w-full py-4">
          <TouchableOpacity onPress={handleImagePicker}>
            {profilePicture ? (
              <Image
                source={{ uri: profilePicture }}
                className="h-40 w-40 rounded-full mb-4"
              />
            ) : (
              <View className="h-40 w-40 bg-gray-300 rounded-full mb-4 justify-center items-center">
                <Text className="text-gray-600">Upload Image</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* User Info */}
        <TextInput
          className="text-gray-700 w-full text-xl px-4 bg-gray-50 py-3 rounded-2xl shadow-black shadow-sm mb-4"
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          className="text-gray-700 w-full text-xl px-4 bg-gray-50 py-3 rounded-2xl shadow-black shadow-sm mb-4"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          className="text-gray-700 w-full text-xl px-4 bg-gray-50 py-3 rounded-2xl shadow-black shadow-sm mb-4"
          placeholder="Email"
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
        />

        <TextInput
          className="text-gray-700 w-full text-xl px-4 bg-gray-50 py-3 rounded-2xl shadow-black shadow-sm mb-4"
          placeholder="Phone Number"
          value={phoneNumber}
          keyboardType="phone-pad"
          onChangeText={setPhoneNumber}
        />

        {/* Address Fields */}
        <View className="mb-4 w-full">
          <View className="bg-gray-50 rounded-2xl shadow-black shadow-sm">
            <Picker
              selectedValue={address.state}
              onValueChange={(itemValue) =>
                setAddress({ ...address, state: itemValue })
              }
              style={{ height: 50 }}
              dropdownIconColor="gray"
            >
              <Picker.Item label="Select a state" value="" />
              {statesAndUTs.map((state) => (
                <Picker.Item
                  key={state.id}
                  label={state.name}
                  value={state.name}
                />
              ))}
            </Picker>
          </View>
        </View>

        <TextInput
          className="text-gray-700 w-full text-xl px-4 bg-gray-50 py-3 rounded-2xl shadow-black shadow-sm mb-4"
          placeholder="District"
          value={address.district}
          onChangeText={(text) => setAddress({ ...address, district: text })}
        />

        <TextInput
          className="text-gray-700 w-full text-xl px-4 bg-gray-50 py-3 rounded-2xl shadow-black shadow-sm mb-4"
          placeholder="Address Line 1"
          value={address.address1}
          onChangeText={(text) => setAddress({ ...address, address1: text })}
        />

        <TextInput
          className="text-gray-700 w-full text-xl px-4 bg-gray-50 py-3 rounded-2xl shadow-black shadow-sm mb-4"
          placeholder="Address Line 2"
          value={address.address2}
          onChangeText={(text) => setAddress({ ...address, address2: text })}
        />

        <TextInput
          className="text-gray-700 w-full text-xl px-4 bg-gray-50 py-3 rounded-2xl shadow-black shadow-sm mb-4"
          placeholder="Pincode"
          value={address.pincode}
          keyboardType="numeric"
          onChangeText={(text) => setAddress({ ...address, pincode: text })}
        />

        <TouchableOpacity
          onPress={handleLogout}
          className="mt-4 h-16 w-48 bg-red-400 rounded-2xl items-center justify-center shadow-black shadow-sm"
        >
          <Text className="text-white font-semibold text-center text-3xl">
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </ScrollView>
  );
};

export default Profile;
