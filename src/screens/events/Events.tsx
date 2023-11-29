import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Plus from "../../../assets/plus.svg";
import EventsCard from "../../components/eventsCard/EventsCard";
import styles from "./Styles";
const EventsScreen = ({ navigation }: any) => {
  const data = [
    {
      profileImageSrc: require("../../../assets/profileImage.png"),
      bgImageSource: require("../../../assets/bg_1.png"),
      name: "Rona Frishman |",
      exp: "Fearless",
      desp: "Ramat aliau, Rishon Le Zion, 20.01.2020 | 20:00",
    },
    {
      profileImageSrc: require("../../../assets/profileImage.png"),
      bgImageSource: require("../../../assets/bg_1.png"),
      name: "Rona Frishman |",
      exp: "Fearless",
      desp: "Ramat aliau, Rishon Le Zion, 20.01.2020 | 20:00",
    },
    {
      profileImageSrc: require("../../../assets/profileImage.png"),
      bgImageSource: require("../../../assets/bg_1.png"),
      name: "Rona Frishman |",
      exp: "Fearless",
      desp: "Ramat aliau, Rishon Le Zion, 20.01.2020 | 20:00",
    },
    {
      profileImageSrc: require("../../../assets/profileImage.png"),
      bgImageSource: require("../../../assets/bg_1.png"),
      name: "Rona Frishman |",
      exp: "Fearless",
      desp: "Ramat aliau, Rishon Le Zion, 20.01.2020 | 20:00",
    },
    {
      profileImageSrc: require("../../../assets/profileImage.png"),
      bgImageSource: require("../../../assets/bg_1.png"),
      name: "Rona Frishman |",
      exp: "Fearless",
      desp: "Ramat aliau, Rishon Le Zion, 20.01.2020 | 20:00",
    },
  ];
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        style={styles.plusContainer}
        onPress={() => {
          navigation.navigate("NewEventScreen");
        }}
      >
        <Plus />
      </TouchableOpacity>

      <ScrollView>
        {data.map((item, index) => (
          <EventsCard
            key={index}
            details={{
              bgImageSource: item.bgImageSource,
              profileImageSrc: item.profileImageSrc,
              name: item.name,
              exp: item.exp,
              desp: item.desp,
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default EventsScreen;
