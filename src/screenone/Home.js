import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import HeaderTop from "../resuable/HeaderTop";
import Card from "./card/Card";
import RecentCard from "./card/RecentCard";
import TrandingPostCard from "./card/TrendingPostCard";
import TrendingCategory from "./card/TrendingCategory";
import ViewdPostCard from "./card/ViewdPostCard";
import MostPopularUserCad from "./card/MostPopularUserCad";
import Hastaging from "./card/HastagingCard";
import { appbarData } from "../utils/constant";

const Home = () => {
  return (
    <ScrollView>
      <HeaderTop />
      {/* Middle Header Section */}
      <View style={styles.home_Container}>
        <View style={styles.middle_header}>
          <View style={styles.inputContaienr}>
            <AntDesign name="search1" size={21} color="#808080" />
            <TextInput
              keyboardType="numeric"
              placeholder="Search Forum...."
              placeholderTextColor="#737C96"
              style={styles.input_style}
            />
          </View>
          <View style={styles.buttonStyle}>
            <Text style={styles.textStyles}>Write Post</Text>
            <AntDesign name="caretdown" size={19} color="#fff" style={{marginLeft:12}} />
          </View>
        </View>
        {/* top home section */}
        <Text style={styles.homeTextStyle}>Communities By Inner Section</Text>
        <View style={styles.homeMiddle_text_bar}>
          <Text style={styles.home_top_textStyles}>Home</Text>
          {appbarData.map((data) => (
            <Text style={styles.home_top_textStyle}>{data.title}</Text>
          ))}
        </View>
        <Card />
        <RecentCard />
        <TrandingPostCard />
        <TrendingCategory />
        <ViewdPostCard />
        <MostPopularUserCad />
        <Hastaging />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  home_Container: {
    width: "100%",
    height: "100%",
    paddingVertical: 32,
    paddingHorizontal: 10,
    backgroundColor: "#000000",
  },
  // Middle Header Style
  middle_header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 17,
    paddingVertical: 12,
  },
  inputContaienr: {
    width: "56%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#262D34",
  },
  input_style: {
    fontSize: 14,
    fontWeight: "600",
    paddingHorizontal: 5,
    color: "#fff",
  },
  buttonStyle: {
    width: "40%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#979797",
    borderRadius: 15,
    backgroundColor: "#FF6934",
    flexDirection: "row",
    alignItems: "center",
  },
  textStyles: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  // Home Top Section
  homeTextStyle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
  },
  homeMiddle_text_bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
    marginLeft: -10,
  },
  home_top_textStyles: {
    color: "#FFCC00",
    fontSize: 15,
    fontWeight: "400",
    marginHorizontal: 12,
  },
  home_top_textStyle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "400",
    marginHorizontal: 12,
  },
});

export default Home;
