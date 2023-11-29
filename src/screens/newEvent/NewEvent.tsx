import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../components/header/Header";
import CustomModal from "../../components/modal/Modal";
import styles from "./Styles";

const NewEventScreen = ({ navigation }: any) => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [date, setDate] = useState(new Date(1598051730000));

  const showMode = (currentMode: string) => {
    setShow(true);
    setMode(currentMode);
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);

    setDate(currentDate);
  };

  return (
    <View style={[styles.container]}>
      <Header />
      <ScrollView>
        <Text style={styles.title}>Create a new meeting</Text>

        <View style={styles.inputField}>
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Game Location"
            placeholderTextColor="#8F8F93"
          />
        </View>
        <View style={styles.mainView}>
          <TouchableOpacity
            style={styles.date}
            onPress={() => showMode("date")}
          >
            <Text style={styles.inputFieldText}>
              {date
                .toLocaleString()
                .substring(0, date.toLocaleString().indexOf(" "))}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.time}
            onPress={() => showMode("time")}
          >
            <Text style={styles.inputFieldText}>
              {date
                .toLocaleString()
                .substring(date.toLocaleString().indexOf(" "))}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.continueBtn}
        onPress={() => navigation.navigate("SignupContinueScreen")}
      >
        <Text style={styles.continueBtnText}>Continue</Text>
      </TouchableOpacity>

      <CustomModal
        animationType="slide"
        transparent={true}
        visible={show}
        dismiss={() => {
          setShow(!show);
        }}
      >
        <View
          style={{ backgroundColor: "#8F8F93", borderRadius: 16, padding: 16 }}
        >
          <DateTimePicker
            minimumDate={new Date()}
            value={date}
            mode={mode as any}
            onChange={onChange}
            display={mode == "time" ? "spinner" : "inline"}
          />
        </View>
      </CustomModal>
    </View>
  );
};

export default NewEventScreen;
