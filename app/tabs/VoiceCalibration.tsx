import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { Audio } from "expo-av";
import Voice from "@react-native-voice/voice";
import { useNavigation } from "@react-navigation/native";

const VoiceCalibration = () => {
  const navigation = useNavigation();
  const [isRecording, setIsRecording] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Permission required", "Microphone access is needed for voice recognition.");
      } else {
        initializeVoice();
      }
    };

    const initializeVoice = async () => {
      try {
        Voice.onSpeechStart = () => setIsRecording(true);
        Voice.onSpeechEnd = () => setIsRecording(false);
        Voice.onSpeechResults = (event) => {
          setRecognizedText(event.value[0]);
          if (event.value[0]) {
            Alert.alert("Voice model saved!", "Your voice has been recorded.");
            navigation.navigate("tabs/Home");
          }
        };
        Voice.onSpeechError = (event) => {
          setError(event.error);
          setIsRecording(false);
        };
      } catch (err) {
        console.error("Error initializing voice:", err);
        setError(err.message);
      }
    };

    requestPermissions();

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, [navigation]);

  const startRecording = async () => {
    setRecognizedText("");
    setError("");
    try {
      await Voice.start("en-US");
    } catch (err) {
      console.error("Error in startRecording:", err);
      setError(err.message);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
    } catch (err) {
      console.error("Error in stopRecording:", err);
      setError(err.message);
    }
  };

  return (
    <View className="flex-1 justify-center items-center p-4 bg-neutral-950">
      <Text className="text-2xl font-bold mb-5 text-white">
        Voice Calibration
      </Text>
      <Text className="text-lg mb-5 text-gray-300">
        {isRecording ? "Listening..." : "Press the button to start recording."}
      </Text>
      <Button
        title={isRecording ? "Stop Recording" : "Start Recording"}
        onPress={isRecording ? stopRecording : startRecording}
      />
      {recognizedText && (
        <Text className="mt-5 text-lg text-green-500">
          Recognized: {recognizedText}
        </Text>
      )}
      {error && (
        <Text className="mt-5 text-lg text-red-500">Error: {error}</Text>
      )}
    </View>
  );
};

export default VoiceCalibration;
