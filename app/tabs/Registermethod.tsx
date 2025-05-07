import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import LOGO from "../../assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const Registermethod = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 p-4 items-center justify-evenly bg-neutral-950">
      <View className="mx-2 items-center">
        <Image
          source={LOGO}
          className="w-36 h-36"
          resizeMode="contain"
          accessibilityLabel="App Logo"
        />
        <View className="flex justify-center items-center mx-6 mb-4 pb-6 pt-2">
          <Text className="text-3xl font-bold text-center text-neutral-100">
            Unlock your personalized training plan
          </Text>
        </View>
      </View>

      <View className="gap-4">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate("tabs/Register")}
        >
          <View className="mt-4 h-14 w-80 bg-orange-600 rounded-lg items-center justify-center flex-row">
            <Icon name="google" size={24} color="#FFFFFF" className='pr-3' />
            <Text className="ml-2 text-neutral-100 text-2xl font-semibold" accessibilityLabel="Sign Up with Google">
              Sign Up with Google
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate("tabs/Register")}
        >
          <View className="mt-4 h-14 w-80 bg-blue-600 rounded-lg items-center justify-center flex-row">
            <Icon name="facebook" size={24} color="#FFFFFF" className='pr-3' />
            <Text className="ml-2 text-neutral-100 text-2xl font-semibold" accessibilityLabel="Sign Up with Facebook">
              Sign Up with Facebook
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate("tabs/Register")}
        >
          <View className="mt-4 h-14 w-80 bg-red-600 rounded-lg items-center justify-center flex-row">
            <Icon name="envelope" size={24} color="#FFFFFF" className='pr-3' />
            <Text className="ml-2 text-neutral-100 text-2xl font-semibold" accessibilityLabel="Sign Up with Email">
              Sign Up with Email
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate("tabs/Register")}
        >
          <View className="mt-4 h-14 w-80 bg-green-600 rounded-lg items-center justify-center flex-row">
            <Icon name="phone" size={24} color="#FFFFFF" className='pr-3' />
            <Text className="ml-2 text-neutral-100 text-2xl font-semibold" accessibilityLabel="Sign Up with Phone">
              Sign Up with Phone
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Registermethod;
