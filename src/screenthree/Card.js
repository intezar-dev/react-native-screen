import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { home_3_card_Data } from "../utils/constant";

const Card = () => {
  const [selectedValue, setSelectedValue] = useState("null");

  const items = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <View style={styles.card_container}>
      <View style={styles.card}>
        <Text style={{ color: "#fff", opacity:0.8,}}>Home</Text>
        <Text style={{ color: "#fff", opacity:0.8, marginLeft: 10 }}>/</Text>
        <Text style={{ color: "#fff", opacity:0.8, marginLeft: 10 }}>Womens Dress</Text>
        <Text style={{ color: "#fff", opacity:0.8, marginLeft: 10 }}>/</Text>
        <Text style={{ color: "red", marginLeft: 10 }}>Short Dress</Text>
      </View>
      <View style={styles.dropDownContainer}>
        <DropDownPicker
          items={items}
          defaultValue={selectedValue}
          placeholder="Filter"
          style={styles.dropdown}
        />
      </View>

      {/* Dress Card */}
      <View style={styles.dressStyle}>
        {home_3_card_Data.map((data) => (
          <View style={styles.box_style}>
            <Image source={data.img} style={{ width: "100%", height: 219, resizeMode: "contain" }} />
            <View style={{ width: "95%" }}>
              <Text style={{ color: "#fff", fontSize: 17, color: "gray", fontWeight: "600", lineHeight: 29 }}>{data.text1}</Text>
              <Text style={{ color: "#fff", fontSize: 13, color: "gray", fontWeight: "500", }}>{data.text2}</Text>
              <Text style={{ color: "#fff", fontSize: 19, fontWeight: "600", marginTop:12 }}>{data.text3}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card_container: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingLeft: 12,
    paddingVertical: 12,
  },
  dropDownContainer: {
    width: "100%",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  dropdown: {
    width: "100%",
    backgroundColor: "#fafafa",
  },

  // card dress
  dressStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  box_style: {
    width: "50%",
    marginBottom: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Card;
