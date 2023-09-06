import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SearchBar = () => {
  return (
    <View className="flex-row items-center bg-lightWhite shadow-md p-3 rounded-full space-x-3">
      <TouchableOpacity>
        <MagnifyingGlassIcon size={28} color={"#2D4059"} strokeWidth={2} />
      </TouchableOpacity>
      <TextInput
        placeholder="Search here..."
        placeholderTextColor={"gray"}
        className="flex-1"
      />
      <View className="w-[1px] h-[20px] bg-gray opacity-70" />
      <TouchableOpacity>
        <AdjustmentsHorizontalIcon
          size={28}
          color={"#2D4059"}
          strokeWidth={2}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
