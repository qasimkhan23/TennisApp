import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import FriendsCard from "../../components/friendsCard/FriendsCard";
import Header from "../../components/header/Header";
import styles from "./Styles";
const { width, height } = Dimensions.get("window");

const CircleLength = 500;
const Radius = CircleLength / (2 * Math.PI);

const MyFriendsScreen = ({ navigation }: any) => {
  let data = [
    {
      name: "Lara Melikson dfsdfsfsfsdfsdfsdfsfsdf",
      exp: "Smasher",
    },
    {
      name: "Dana reznikov dsfsdfsdfsdfsdfsdfsdfsdfsdfdsfsdf",
      exp: "Legend",
    },
    {
      name: "Lara Melikson",
      exp: "Fresh",
    },
  ];

  return (
    <View style={[styles.container]}>
      <Header />
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require("../../../assets/profileImage.png")}
        />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Text style={styles.title}>Favorites</Text>

        {data.map((item, index) => (
          <FriendsCard
            key={index}
            arrayLength={data.length}
            index={index}
            details={{
              name: item.name,
              exp: item.exp,
            }}
          />
        ))}
        <Text style={styles.title}>Friends</Text>
        {data.map((item, index) => (
          <FriendsCard
            key={index}
            arrayLength={data.length}
            index={index}
            details={{
              name: item.name,
              exp: item.exp,
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MyFriendsScreen;
