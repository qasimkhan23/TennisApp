import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Person from "../../../assets/Person.svg";
import Header from "../../components/header/Header";
import styles from "./Styles";

const SignupScreen = ({ navigation }: any) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "23", value: "23" },
    { label: "24", value: "24" },
    { label: "25", value: "25" },
  ]);
  return (
    <View style={[styles.container]}>
      <Header />

      <View>
        <Text style={styles.title}>Signup</Text>
      </View>
      <View style={styles.avatarViewContainer}>
        <View style={styles.avatarContainer}>
          <Person height={60} />
        </View>
      </View>

      <ScrollView style={styles.bodyContainer}>
        <View style={styles.inputField}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#8F8F93"
          />
        </View>
        <DropDownPicker
          listMode="SCROLLVIEW"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={"Age"}
          zIndexInverse={10000}
          style={styles.dropdownContainer}
          textStyle={styles.dropdownText}
          dropDownContainerStyle={styles.dropdownDataContainer}
        />
        <View style={styles.inputField}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#8F8F93"
          />
        </View>
        <View style={styles.inputField}>
          <TextInput
            style={styles.input}
            placeholder="Region"
            placeholderTextColor="#8F8F93"
          />
        </View>
        <View style={styles.inputField}>
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#8F8F93"
          />
        </View>
        <View style={styles.inputField}>
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Repeat Password"
            placeholderTextColor="#8F8F93"
          />
        </View>
        <TouchableOpacity
          style={styles.continueBtn}
          onPress={() => navigation.navigate("SignupContinueScreen")}
        >
          <Text style={styles.continueBtnText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;
