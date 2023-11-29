import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bg: {
    height: 164,
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
