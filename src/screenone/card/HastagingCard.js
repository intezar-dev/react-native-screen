import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { HastaginingData } from "../../utils/constant";
import { AntDesign } from "@expo/vector-icons";
import HeadingText from "../../resuable/HeadingText";
const Hastaging = () => {
  return (
    <View style={styles.card}>
      <HeadingText leftText={"Tranding Hastaging"} />
      <View style={styles.colorBox}>
        <FlatList
          data={HastaginingData}
          renderItem={({ item }) => (
            <View style={styles.card_box}>
              <Image
                source={item.img}
                style={{ width: 70, height: 60, borderRadius: 12 }}
              />
              <View>
                <Text style={styles.textStyle}>{item.middleText1}</Text>
                <Text style={{ color: "gray", fontWeight: "500" }}>
                  {item.middleText2}
                </Text>
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
    backgroundColor: "#202D21",
    borderRadius: 14,
    paddingVertical: 21,
    paddingHorizontal: 10,
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

export default Hastaging;
