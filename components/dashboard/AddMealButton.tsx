import React from "react";
import { Alert, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";

type AddMealButtonProps = {
  onImageSelected: (uri: string) => void;
};
const AddMealButton = ({ onImageSelected }: AddMealButtonProps) => {
  const handlePickImage = async () => {
    Alert.alert("Select Image", "Choose an image for your meal", [
      { text: "Camera", onPress: openCamera },
      { text: "Gallery", onPress: openGallery },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission needed", "Camera permission is required.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      onImageSelected(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission needed", "Gallery permission is required.");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      onImageSelected(result.assets[0].uri);
    }
  };

  return (
    <TouchableOpacity
      className="mx-5 mt-4 rounded-2xl overflow-hidden"
      activeOpacity={0.85}
      onPress={handlePickImage}
    >
      <LinearGradient
        colors={["#22C55E", "#4ADE80"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="flex-row items-center justify-center py-3.5"
        style={{ borderRadius: 16 }}
      >
        <MaterialIcons name="add" size={20} color="#0B0F14" />
        <Text className="text-[#0B0F14] text-sm font-bold ml-1.5 tracking-wide">
          Add a Meal
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default AddMealButton;
