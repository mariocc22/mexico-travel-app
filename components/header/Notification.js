import { View, Text, TouchableOpacity } from "react-native";
import { BellAlertIcon } from "react-native-heroicons/outline";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Notification = () => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: "rgba(255,255,255, 0.5)" }}
      className="shadow-md rounded-full p-1 relative"
    >
      <View className="w-[10px] h-[10px] bg-secondary rounded-full absolute z-10 -top-1 right-0"></View>
      <BellAlertIcon size={wp(8)} color={"#2D4059"} />
    </TouchableOpacity>
  );
};

export default Notification;
