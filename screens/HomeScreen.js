import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { Image } from "@rneui/themed";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={{
            uri: "https://imgs.search.brave.com/sByiDvdbc_fQKTsXxZVN1vtZ8Ohb2RB0cY7PSx-SCZ4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NjL1ViZXJfbG9n/b18yMDE4LnBuZw",
          }}
          style={{ height: 100, width: 100, resizeMode: "contain" }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
