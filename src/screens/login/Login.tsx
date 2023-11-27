import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import styles from "./Styles";
import GoogleIcon from "../../../assets/GoogleIcon.svg";
import FacebookIcon from "../../../assets/FacebookIcon.svg";

const LoginScreen = ({ navigation, setLoader, loaderBodyContent }: any) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.logoContainer}>
        <Image source={require("../../../assets/Logo.png")} />
      </View>
      <View style={styles.fieldsContainer}>
        <TouchableOpacity style={styles.inputField}>
          <View style={styles.iconAndTextContainer}>
            <GoogleIcon />
            <Text style={styles.inputFieldText}>Login with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputField}>
          <View style={styles.iconAndTextFacebookContainer}>
            <FacebookIcon height={25} />
            <Text style={styles.inputFieldFbText}>Login with Meta</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputField}>
          <View style={styles.TextContainer}>
            <Text style={styles.inputFieldText}>Login with Username</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputField}
          onPress={() => navigation.navigate("SignupScreen")}
        >
          <View style={styles.TextContainer}>
            <Text style={styles.inputFieldText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
