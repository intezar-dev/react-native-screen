import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import {viewedCardData} from '../../utils/constant'
import { AntDesign } from "@expo/vector-icons";
import HeadingText from "../../resuable/HeadingText";

const ViewdPostCard = () => {
  return (
    <View style={styles.card}>
      <HeadingText leftText={"Top 6 Most Viewed Posts"} />
      <View style={styles.colorBox}>
        <FlatList
          data={viewedCardData}
          renderItem={({ item }) => (
            <View style={styles.card_box}>
              <Image
                source={item.img}
                style={{ width: 90, height: 95, borderRadius: 12 }}
              />
              <View style={{ width: "65%", paddingHorizontal: 8 }}>
                <Text style={styles.textStyle}>{item.middleText1}</Text>
                <Text style={styles.textStyle}>{item.middleText2}</Text>
                <Text style={styles.autherStyle}>{item.AuthorName}</Text>
              </View>
              <AntDesign name="arrowright" size={24} color="#97989D" />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    borderRadius: 14,
    paddingVertical: 21,
    paddingHorizontal: 10,
    backgroundColor: "#332634",
  },
  card_box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 19,
  },
  textStyle: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 14.5,
  },
  autherStyle: {
    color: "gray",
    fontWeight: "600",
    marginTop: 12,
  },
});

export default ViewdPostCard;
