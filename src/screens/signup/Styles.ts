import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#162529",
    paddingLeft: 24,
    paddingRight: 24,
  },
  bodyContainer: {
    flex: 1,
    marginTop: 43,
  },
  title: {
    fontFamily: "bold",
    fontSize: 32,
    color: "#EEE",
  },
  avatarViewContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  avatarContainer: {
    backgroundColor: "#343434",
    borderRadius: 90,
    height: 90,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    height: 64,
    // backgroundColor: "red",
    borderRadius: 16,
    borderColor: "#636363",
    borderWidth: 1,
    justifyContent: "center",
    marginBottom: 19,
    zIndex: -1000,
  },
  inputFieldText: {
    fontFamily: "medium",
    fontSize: 16,
    color: "#EEE",
    marginLeft: 12,
  },
  input: {
    color: "#8F8F93",
    fontSize: 24,
    fontFamily: "medium",
    marginLeft: 25,
  },
  continueBtn: {
    height: 55,
    backgroundColor: "#D5FF45",
    borderRadius: 16,
    marginTop: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  continueBtnText: {
    fontFamily: "semiBold",
    color: "#000",
    fontSize: 18,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: "#636363",
    borderRadius: 16,
    marginTop: -4,
    backgroundColor: "#162529",
    marginBottom: 16,
    height: 65,
  },
  dropdownText: {
    fontFamily: "medium",
    fontSize: 24,
    color: "grey",
    marginLeft: 12,
  },
  dropdownDataContainer: {
    borderWidth: 1,
    borderColor: "#636363",
    borderRadius: 4,
    zIndex: 1000,
    backgroundColor: "#162529",
    color: "#EEE",
  },
});
export default styles;
