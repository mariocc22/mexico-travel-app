import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import Location from "../../components/header/Location";
import Notification from "../../components/header/Notification";
import SearchBar from "../../components/SearchBar";
import MainCities from "../../components/sections/MainCities";
import FavoriteCity from "../../components/sections/FavoriteCity";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => <Location />,
          headerRight: () => <Notification />,
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 p-4 pt-6"
      >
        <SearchBar />
        <MainCities />
        <FavoriteCity />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
