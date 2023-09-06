import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  MapPinIcon,
  Square3Stack3DIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useState } from "react";
import { useRouter } from "expo-router";

const FavoriteCard = ({ city }) => {
  const [favorite, setFavorite] = useState(true);
  const [favoriteName, setFavoriteName] = useState("Mexicali");
  const router = useRouter();

  return (
    <TouchableOpacity
      className="flex p-1 rounded-xl mb-8 shadow-sm relative"
      onPress={() => router.push(`/city/${favoriteName}`)}
      style={{ backgroundColor: "white" }}
    >
      <Image
        source={city?.image}
        style={{
          width: "100%",
          height: wp(50),
        }}
        resizeMode="cover"
        className="rounded-xl mb-2"
      />
      <View className="flex-row items-start justify-between">
        <Text className="text-primary font-bold text-sm">{city?.name}</Text>
        <Text className="text-secondary font-bold mb-2 text-sm">
          {city?.iconic}{" "}
          <Text className="text-gray opacity-70 font-medium text-xs">
            /popular
          </Text>
        </Text>
      </View>
      <View className="flex flex-row items-center gap-1 mb-[1px]">
        <MapPinIcon size={wp(6)} color={"gray"} />
        <Text className="text-primary font-medium text-xs">
          {city?.location}
        </Text>
      </View>
      <View className="flex flex-row items-center gap-1">
        <Square3Stack3DIcon size={wp(6)} color={"gray"} />
        <Text className="text-primary font-medium text-xs">
          {city?.squareMeters} m2
        </Text>
      </View>
      <TouchableOpacity
        className="absolute p-2 rounded-full top-2 right-2"
        onPress={() => setFavorite(!favorite)}
        style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
      >
        <StarIcon size={wp(8)} color={favorite ? "#F07B3F" : "#FFFF"} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default FavoriteCard;
