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
    // width: "100%",
    height: 164,
    // flex: 0.75,
    borderRadius: 16,
    marginBottom: 17,
    marginTop: 16,
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
    height: 45,
    width: 45,
    borderRadius: 117,
  },
  expLevel: {
    fontFamily: "medium",
    fontSize: 18,
    color: "#D5FF45",
    lineHeight: 18,
  },
});
export default styles;
