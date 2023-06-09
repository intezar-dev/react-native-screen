import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
const HeaderTop = () => {
  return (
    <View style={styles.top_container}>
      <View style={styles.top_menu}>
        <Entypo name="chevron-left" size={34} color="#fff" />
        <Text style={styles.textStyle}>THE_ESHOP_OFFICIAL</Text>
        <Feather name="menu" size={26} color="#fff" />
      </View>
      <View style={styles.middle}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Text style={styles.textStyles}>Forum</Text>
          <Text style={styles.textStyles}>Stages</Text>
          <Text style={styles.textStyles}>Snaps</Text>
          <Text style={styles.textStyles}>My eShoap</Text>
          <Text style={styles.textStyles}>My Fav</Text>
          <Text style={styles.textStyles}>News</Text>
          <Text style={styles.textStyles}>Laptop</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top_container: {
    width: "100%",
    alignItems: "center",
    paddingTop: 43,
    paddingHorizontal: 12,
    backgroundColor: "#000000",
  },
  top_menu: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  textStyle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900",
  },
  middle: {
    flexDirection: "row",
    alignItems: "center",
  },
  textStyles: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 10,
  },
});

export default HeaderTop;
