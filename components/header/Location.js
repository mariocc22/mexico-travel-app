import { View, Text } from "react-native";
import { MapPinIcon } from "react-native-heroicons/solid";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Location = () => {
  return (
    <View>
      <Text
        className="text-gray font-medium mb-1"
        style={{
          fontSize: wp(3.5),
        }}
      >
        Current Location
      </Text>
      <View className="flex flex-row gap-1">
        <MapPinIcon size={wp(5)} color={"#F07B3F"} />
        <Text className="text-primary font-bold" style={{ fontSize: wp(4) }}>
          Baja California, Mexico
        </Text>
      </View>
    </View>
  );
};

export default Location;
