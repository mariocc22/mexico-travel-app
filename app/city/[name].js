import {
  View,
  Text,
  SafeAreaView,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Stack, useGlobalSearchParams } from "expo-router";
import { cities } from "../../data/cities";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { StatusBar } from "expo-status-bar";

import { useRouter } from "expo-router";

import { useState } from "react";

import {
  ArrowLeftIcon,
  HeartIcon,
  CalendarDaysIcon,
  PhoneIcon,
} from "react-native-heroicons/outline";
import {
  MapPinIcon,
  Square3Stack3DIcon,
  UserGroupIcon,
  GlobeAmericasIcon,
  SparklesIcon,
} from "react-native-heroicons/solid";

// crossplatform styling
const ios = Platform.OS === "ios";
const topMargin = ios ? "" : "mt-10";

const CityPage = () => {
  const params = useGlobalSearchParams();
  const cityInfo = cities.filter((city) => city.name === params.name)[0];
  const [favorite, setFavorite] = useState(false);
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View className="flex-1" style={{ backgroundColor: "white" }}>
        {/* background image */}
        <Image
          source={cityInfo?.image}
          style={{ width: wp(100), height: hp(50) }}
        />
        <StatusBar style="light" />

        {/* header buttons */}
        <SafeAreaView
          className={
            "flex-row justify-between items-center w-full absolute mx-4 top-12" +
            topMargin
          }
        >
          <TouchableOpacity
            className="p-2 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
            onPress={() => router.back()}
          >
            <ArrowLeftIcon size={wp(8)} color={"#2D4059"} strokeWidth={2} />
          </TouchableOpacity>
          <TouchableOpacity
            className="p-2 rounded-full mr-8"
            style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
            onPress={() => setFavorite(!favorite)}
          >
            <HeartIcon
              size={wp(8)}
              color={"#2D4059"}
              fill={favorite ? "#2D4059" : "transparent"}
              strokeWidth={2}
            />
          </TouchableOpacity>
        </SafeAreaView>

        {/* city info */}
        <View
          style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
          className="px-4 flex flex-1 justify-between bg-white pt8 -mt-14"
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            className="space-y-5 mt-4 mb-8"
          >
            <View className="flex-row items-center justify-between">
              <Text
                className="font-bold text-primary"
                style={{ fontSize: wp(8.5) }}
              >
                {cityInfo?.name}
              </Text>
              <TouchableOpacity
                className="flex-row items-center gap-[2px] px-2 py-1 rounded-full bg-white shadow-md"
                onPress={() => router.push(`${cityInfo?.map}`)}
              >
                <GlobeAmericasIcon size={wp(6)} color={"#F07B3F"} />
                <Text className="text-primary font-medium">Map</Text>
              </TouchableOpacity>
            </View>
            <View>
              <View className="flex flex-row items-center gap-[4px] mb-[1px]">
                <MapPinIcon size={wp(8)} color={"gray"} />
                <Text className="text-primary font-medium text-base">
                  {cityInfo?.location}
                </Text>
              </View>
              <View className="flex flex-row items-center gap-[4px]">
                <UserGroupIcon size={wp(8)} color={"gray"} />
                <Text className="text-primary font-medium text-base">
                  {cityInfo?.population.toLocaleString()} people
                </Text>
              </View>
            </View>
            <View
              style={{ backgroundColor: "rgba(255, 243, 218, 0.5)" }}
              className="flex-row items-center justify-between px-4 py-6 rounded-xl"
            >
              <View className="flex-row items-center gap-1">
                <CalendarDaysIcon size={wp(6)} color={"#F07B3F"} />
                <Text className="font-regular text-primary text-xs">
                  {cityInfo?.founded}
                </Text>
              </View>
              <View className="flex-row items-center gap-1">
                <PhoneIcon size={wp(6)} color={"#F07B3F"} />
                <Text className="font-regular text-primary text-xs">
                  {cityInfo?.areaCode}
                </Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Square3Stack3DIcon size={wp(6)} color={"#F07B3F"} />
                <Text className="font-regular text-primary text-xs">
                  {cityInfo?.squareMeters} m2
                </Text>
              </View>
            </View>
            <Text className="w-full text-base text-gray leading-6 tracking-wide">
              {cityInfo?.description}
            </Text>
            <View>
              <View className="flex-row items-center justify-between">
                <View>
                  <Text className="text-gray text-sm">Iconic</Text>
                  <View className="flex flex-row items-center gap-[2px]">
                    <SparklesIcon size={wp(6)} color={"#F07B3F"} />
                    <Text className="text-secondary font-bold text-base">
                      {cityInfo?.iconic}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  className="px-10 py-4 bg-primary rounded-xl"
                  onPress={() => router.push(`${cityInfo?.moreInfo}`)}
                >
                  <Text className="text-white font-medium text-xs shadow-md">
                    More info
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default CityPage;
