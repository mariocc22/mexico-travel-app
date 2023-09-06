import { View, Text, TouchableOpacity, Image } from "react-native";
import { MapPinIcon, Square3Stack3DIcon } from "react-native-heroicons/solid";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useRouter } from "expo-router";

const MainCard = ({ city }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="flex p-1 rounded-xl mb-4 shadow-sm"
      style={{ backgroundColor: "white" }}
      onPress={() => router.push(`/city/${city?.name}`)}
    >
      <Image
        source={city?.image}
        style={{
          width: wp(50),
          height: wp(30),
        }}
        resizeMode="cover"
        className="rounded-xl mb-2"
      />
      <Text className="text-primary font-bold text-sm">{city?.name}</Text>
      <Text className="text-secondary font-bold mb-2 text-sm">
        {city?.iconic}{" "}
        <Text className="text-gray opacity-70 font-medium text-xs">
          /popular
        </Text>
      </Text>
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
    </TouchableOpacity>
  );
};

export default MainCard;
