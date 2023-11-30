import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from "../../components/header/Header";
import HistoryCard from "../../components/histortCard/HistoryCard";
import styles from "./Styles";

const ProfileDetailScreen = ({ navigation }: any) => {
  let data = [
    {
      name: "Lara Melikson sdfsdfsfsfsdfsfsffsf fddsfsdfsdfsdfsdf",
      date: "12.05.2023",
      id: "6-2 | 4-6 | 6-3",
    },
    {
      name: "Dana reznikov",
      date: "12.05.2023",
      id: "6-2   4-6   6-3",
    },
    {
      name: "Lara Melikson",
      date: "12.05.2023",
      id: "6-2   4-6   6-3",
    },
    {
      name: "Lara Melikson",
      date: "12.05.2023",
      id: "6-2   4-6   6-3",
    },
    {
      name: "Yossi Brossi",
      date: "12.05.2023",
      id: "6-2   4-6   6-3",
    },
    {
      name: "Rona frishman",
      date: "12.05.2023",
      id: "6-2  4-6  6-3",
    },
    {
      name: "Lara Melikson",
      date: "12.05.2023",
      id: "6-2  4-6  6-3",
    },
    {
      name: "Lara Melikson",
      date: "12.05.2023",
      id: "6-2  4-6  6-3",
    },
    {
      name: "Lara Melikson",
      date: "12.05.2023",
      id: "6-2  4-6  6-3",
    },
    {
      name: "Lara Melikson",
      date: "12.05.2023",
      id: "6-2  4-6  6-3",
    },
  ];

  return (
    <View style={[styles.container]}>
      <Header />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={require("../../../assets/profileImage.png")}
          />
          <TouchableOpacity style={styles.playBtn}>
            <Text style={styles.playBtnText}>Add Friend</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Dina Primo | </Text>
          <Text style={styles.expLevel}>Elite </Text>
        </View>

        <Text style={styles.nameDesp}>Dimona </Text>

        <Text style={styles.bio}>
          26 years old | Playing for the win | Evenings or mornings | volley
          only
        </Text>

        {data.map((item, index) => (
          <View style={{ marginBottom: 16 }} key={index}>
            <HistoryCard
              details={{
                name: item.name,
                date: item.date,
                id: item.id,
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProfileDetailScreen;
