import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import FacebookIcon from "../../../assets/FacebookIcon.svg";
import GoogleIcon from "../../../assets/GoogleIcon.svg";
import styles from "./Styles";

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
