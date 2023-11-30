import React from "react";
import { ScrollView, TextInput, View } from "react-native";
import Search from "../../../assets/search.svg";
import Header from "../../components/header/Header";
import HistoryCard from "../../components/histortCard/HistoryCard";
import styles from "./Styles";

const GameHistoryScreen = ({ navigation }: any) => {
  let data = [
    {
      name: "Lara Melikson sdfsdfdsf dsfsdfdsfdsfsdf sdsdfsdf",
      date: "12.05.2023",
      id: "6-2 | 4-6 | 6-3",
    },
    {
      name: "Dana reznikov dfsdfsdfsdfsdfdsf sdfdsfdsfsdfdsfdsdfsdfds",
      date: "12.05.2023",
      id: "6-2   4-6   6-3",
    },
    {
      name: "Yuval Melikson dsfsdf sdfsfdsf",
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
      <View style={styles.inputField}>
        <View style={styles.searchBarContainer}>
          <Search />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#8F8F93"
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
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

export default GameHistoryScreen;
