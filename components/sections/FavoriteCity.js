import { View, Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { cities } from "../../data/cities";

// components
import FavoriteCard from "../cards/FavoriteCard";

const FavoriteCity = () => {
  return (
    <View className="flex-1">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-primary font-bold" style={{ fontSize: wp(7) }}>
          Favorite City
        </Text>
        <TouchableOpacity>
          <Text
            className="text-secondary font-normal"
            style={{ fontSize: wp(4.5) }}
          >
            See More
          </Text>
        </TouchableOpacity>
      </View>
      <FavoriteCard city={cities[2]} />
    </View>
  );
};

export default FavoriteCity;
