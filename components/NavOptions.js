import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Icon, Image } from "@rneui/themed";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image:
      "https://imgs.search.brave.com/JYPoqkrISdUzcuqPpsX7PKcOJ-mxNYCch95jnkIYFmE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9yaWRl/YW1pZ29zLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8w/MS9SaWRlLUFtaWdv/cy0wMi5wbmc",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image:
      "https://imgs.search.brave.com/IKUKSskoXw2rMpop3D5Pyu291gxj7X41tdVvTv1R3eY/rs:fit:1200:980:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzI3/My81NDIvb3JpZ2lu/YWwvb25saW5lLWZv/b2Qtb3JkZXItY29u/Y2VwdC12ZWN0b3Iu/anBn",
    screen: "EatScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          <View>
            <Image
              source={{ uri: item.image }}
              style={{ height: 120, width: 120, resizeMode: "contain" }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              type="antdesign"
              name="arrowright"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
