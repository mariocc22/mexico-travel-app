import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

// components
import MainCard from "../cards/MainCard";

// data
import { cities } from "../../data/cities";

const MainCities = () => {
  return (
    <View className="flex mt-8">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-primary font-bold" style={{ fontSize: wp(7) }}>
          Main Cities
        </Text>
        <TouchableOpacity>
          <Text
            className="text-secondary font-normal"
            style={{ fontSize: wp(4.5) }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: 20 }}
      >
        {cities.map((city, index) => (
          <MainCard city={city} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MainCities;
