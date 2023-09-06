import { View, Text, Image, TouchableOpacity } from "react-native";

// router expo
import { useRouter } from "expo-router";

// responsive width and height
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// gradients
import { LinearGradient } from "expo-linear-gradient";

// icons
import { HeartIcon } from "react-native-heroicons/solid";

const SplashScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 flex justify-end relative">
      {/* background image */}
      <Image
        source={require("../../assets/images/splash-screen.jpg")}
        resizeMode="cover"
        style={{
          width: wp("100%"),
          height: hp("100%"),
          position: "absolute",
        }}
      />

      {/* content & gradient */}
      <View className="p-4 pb-10 space-y-5">
        {/* gradient */}
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.95)"]}
          style={{ width: wp(100), height: hp(70) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        />
        {/* text */}
        <View className="space-y-2">
          <Text
            className="text-lightWhite font-bold text-5xl opacity-90"
            style={{ fontSize: wp(13) }}
          >
            Discover La Baja{" "}
            <Text
              className="text-secondary font-bold text-5xl"
              style={{ fontSize: wp(13) }}
            >
              !
            </Text>
          </Text>
          <Text
            className="text-lightWhite opacity-80 font-medium leading-4"
            style={{ fontSize: wp(4) }}
          >
            Exploring the Beauty and Culture of Baja California, Mexico
          </Text>
        </View>
        {/* button */}
        <TouchableOpacity
          className="bg-secondary flex items-center justify-center p-4 rounded-2xl"
          onPress={() => router.push("/home")}
        >
          <Text className="text-white font-bold" style={{ fontSize: wp(5) }}>
            Start Exploring!
          </Text>
        </TouchableOpacity>
        <View className="flex flex-row items-center justify-center gap-1">
          <Text
            className="text-white font-medium text-center opacity-80 "
            style={{ fontSize: wp(4) }}
          >
            By Mario with love
          </Text>
          <HeartIcon size={wp(5)} color={"#F07B3F"} />
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
