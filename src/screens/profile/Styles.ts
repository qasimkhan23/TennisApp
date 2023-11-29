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
  infoContainer: {
    marginTop: 85,
    alignItems: "center",
  },
  nameText: {
    fontFamily: "displayMedium",
    fontSize: 24,
    color: "#FFF",
  },
  despContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  despText: {
    fontFamily: "displayMedium",
    fontSize: 20,
    color: "#FFF",
  },
  expLevel: {
    fontFamily: "displayMedium",
    fontSize: 20,
    color: "#D5FF45",
  },
  actionsContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  historyBtn: {
    backgroundColor: "#162529",
    borderColor: "#636363",
    borderWidth: 1,
    padding: 10.5,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  historyBtnText: {
    fontFamily: "medium",
    fontSize: 16,
    color: "#FFF",
  },
  friendsBtn: {
    backgroundColor: "#162529",
    borderColor: "#636363",
    borderWidth: 1,
    padding: 10.5,
    borderRadius: 8,
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 24,
    paddingRight: 24,
  },
  dots: {
    padding: 10.5,
  },
  friendsBtnText: {
    fontFamily: "medium",
    fontSize: 16,
    color: "#FFF",
  },
  bioContainer: {
    alignItems: "center",
    marginTop: 32,
    paddingHorizontal: 32,
  },
  bioText: {
    fontFamily: "medium",
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
  },
  cardsContainer: {
    justifyContent: "center",
    marginTop: 70,
    flexDirection: "row",
  },
  card: {
    height: 120,
    width: 120,
    justifyContent: "flex-end",
  },
  cardText: {
    fontFamily: "medium",
    fontSize: 10,
    color: "#FFF",
    textShadowColor: "#000",
    marginBottom: 12,
    marginLeft: 16,
  },
});
export default styles;
