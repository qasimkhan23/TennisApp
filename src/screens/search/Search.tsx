import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Cross from "../../../assets/cross.svg";
import Search from "../../../assets/search.svg";
import Header from "../../components/header/Header";
import styles from "./Styles";

const SearchScreen = ({ navigation }: any) => {
  return (
    <View style={[styles.container]}>
      <Header />
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require("../../../assets/profileImage.png")}
        />
      </View>
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
      <View style={styles.pillsContainer}>
        <ScrollView
          horizontal
          contentContainerStyle={{
            justifyContent: "space-evenly",
            flex: 1,
          }}
        >
          <View style={styles.pill}>
            <Text style={styles.pillText}>Nearby</Text>
            <TouchableOpacity>
              <Cross />
            </TouchableOpacity>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>Elite</Text>
            <TouchableOpacity>
              <Cross />
            </TouchableOpacity>
          </View>
          <View style={styles.pill2}>
            <Text style={styles.pillText}>My Age</Text>
          </View>
          <View style={styles.pill2}>
            <Text style={styles.pillText}>My Gender</Text>
          </View>
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.cardsWrapper}>
          <View style={styles.friendCard}>
            <TouchableOpacity
              style={styles.avatarContainer}
              onPress={() => {
                navigation.navigate("ProfileDetailScreen");
              }}
            >
              <Image
                style={styles.cardAvatar}
                source={require("../../../assets/profileImage.png")}
              />
            </TouchableOpacity>
            <Text style={styles.cardText}>Lia Shlomi</Text>
            <Text style={styles.cardExpText}>Elite</Text>

            <TouchableOpacity style={styles.playBtn}>
              <Text style={styles.playBtnText}>Add Friend</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.friendCard}>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.cardAvatar}
                source={require("../../../assets/profileImage.png")}
              />
            </View>
            <Text style={styles.cardText}>Lia Shlomi</Text>
            <Text style={styles.cardExpText}>Elite</Text>

            <TouchableOpacity style={styles.playBtn}>
              <Text style={styles.playBtnText}>Add Friend</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.friendCard}>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.cardAvatar}
                source={require("../../../assets/profileImage.png")}
              />
            </View>
            <Text style={styles.cardText}>Lia Shlomi</Text>
            <Text style={styles.cardExpText}>Elite</Text>

            <TouchableOpacity style={styles.playBtn}>
              <Text style={styles.playBtnText}>Add Friend</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.friendCard}>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.cardAvatar}
                source={require("../../../assets/profileImage.png")}
              />
            </View>
            <Text style={styles.cardText}>Lia Shlomi</Text>
            <Text style={styles.cardExpText}>Elite</Text>

            <TouchableOpacity style={styles.playBtn}>
              <Text style={styles.playBtnText}>Add Friend</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.friendCard}>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.cardAvatar}
                source={require("../../../assets/profileImage.png")}
              />
            </View>
            <Text style={styles.cardText}>Lia Shlomi</Text>
            <Text style={styles.cardExpText}>Elite</Text>

            <TouchableOpacity style={styles.playBtn}>
              <Text style={styles.playBtnText}>Add Friend</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
