import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import HeadingText from "../../resuable/HeadingText";


const TrendingCategory = () => {
  return (
    <View style={styles.card}>
      <HeadingText leftText={"Top 3 Tranding Categories"} />
      <View style={styles.categorContainer}>
        <View style={styles.cardIcons}>
          <AntDesign name="playcircleo" size={35} color="#335248" />
          <Text style={styles.cardTextStyle}>Jobs</Text>
        </View>
        <View style={styles.cardIcons}>
          <Entypo name="code" size={35} color="#EEA956" />
          <Text style={styles.cardTextStyle}>Informations Technologies</Text>
        </View>
        <View style={styles.cardIcons}>
          <AntDesign name="playcircleo" size={35} color="#444F5F" />
          <Text style={styles.cardTextStyle}>Educations</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
  },
  categorContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },

  cardIcons: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  cardTextStyle: {
    color: "#fff",
    marginLeft: 17,
  },
  card_box: {
    minHeight: 110,
    borderRadius: 15,
    paddingVertical: 10,
    flexDirection: "column",
    paddingHorizontal: 10,
    backgroundColor: "#606060",
    marginBottom: 10,
  },
  smallCard: {
    width: 54,
    height: 54,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "red",
    marginRight: 10,
  },
  dummyTexyStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  textStyle: {
    color: "#fff",
    fontSize: 11,
    marginLeft: 3,
  },
});

export default TrendingCategory;
