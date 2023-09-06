import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import SplashScreen from "../components/screens/SplashScreen";

const Home = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          headerShown: false,
        }}
      />
      <SplashScreen />
    </>
  );
};

export default Home;
