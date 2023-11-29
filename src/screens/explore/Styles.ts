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
  plusContainer: {
    alignItems: "flex-end",
    marginTop: 16,
  },
  bg: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    maxHeight: "60%",
    width: "100%",
  },
  transparentView: {
    flex: 1,
    backgroundColor: "black",
    opacity: 0.78,
    borderRadius: 10,
    // alignItems: "center",
    paddingHorizontal: 12,
  },
  clickableView: {
    flex: 1,
    // alignItems: "center",
    marginTop: 12,
  },
  cardTitle: {
    fontFamily: "medium",
    fontSize: 18,
    color: "#FFF",
    lineHeight: 18,
  },
  cardDesp: {
    width: "70%",
    fontFamily: "medium",
    fontSize: 18,
    color: "#FFF",
    // textAlign: "center",
    marginTop: 8,
    lineHeight: 20,
  },
  avatarContainer: {},
  avatar: {
    height: 65,
    width: 65,
    borderRadius: 117,
  },
  expLevel: {
    fontFamily: "medium",
    fontSize: 18,
    color: "#D5FF45",
    lineHeight: 18,
  },
  title: {
    fontFamily: "medium",
    fontSize: 32,
    color: "#D5FF45",
    // lineHeight: 18,
  },
  desp: {
    fontFamily: "medium",
    fontSize: 24,
    color: "#FFF",
    textAlign: "center",
    marginTop: 24,

    // lineHeight: 18,
  },
  mainView: {
    marginTop: 48,
    alignItems: "center",
    flex: 1,
  },
  continueBtn: {
    height: 55,
    backgroundColor: "#D5FF45",
    borderRadius: 16,
    marginTop: 6,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 48,
  },
  continueBtnText: {
    fontFamily: "semiBold",
    color: "#000",
    fontSize: 18,
  },
});
export default styles;
