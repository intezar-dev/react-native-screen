import { View, Text, StyleSheet } from "react-native";
import { recentCardData } from "../../utils/constant";
import HeadingText from "../../resuable/HeadingText";

const TrandingPostCard = () => {
  return (
    <View style={styles.card}>
      <HeadingText leftText={"Top 3 Tranding Posts"} />
      {recentCardData.map((data) => (
        <View style={styles.card_box}>
          <View style={styles.card_flex}>
            <View style={styles.smallCard}>
              <Text style={{ fontSize: 9, color: "#fff", fontWeight: "900" }}>
                {data.leftTitle}
              </Text>
              <Text style={{ fontSize: 9, color: "#fff", fontWeight: "900" }}>
                {data.lefttext}
              </Text>
            </View>
            <Text style={{ color: "#fff", fontWeight: "500" }}>
              {data.title1}
            </Text>
          </View>
          <View style={styles.dummyTexyStyle}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "#CE493C", fontWeight: "400" }}>
                {data.categoty}:
              </Text>
              <Text style={styles.textStyle}>{data.crypto}...</Text>
            </View>
            <Text style={styles.textStyle}>{data.viws}</Text>
            <Text style={styles.textStyle}>{data.likes}</Text>
            <Text style={styles.textStyle}>{data.comment}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
  },
  card_box: {
    minHeight: 110,
    borderRadius: 15,
    paddingVertical: 10,
    flexDirection: "column",
    paddingHorizontal: 10,
    backgroundColor: "#2C2C2C",
    marginBottom: 10,
  },
  smallCard: {
    width: 54,
    height: 54,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#CE493C",
    marginRight: 10,
  },
  card_flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  dummyTexyStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  textStyle: {
    color: "#BCC6DA",
    fontSize: 11,
    marginLeft: 3,
  },
});

export default TrandingPostCard;
