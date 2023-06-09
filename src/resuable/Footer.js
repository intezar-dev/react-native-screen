import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.boxOne}>
        <Entypo name="home" size={24} color="#fff" />
        <Text style={{ color: "#fff", fontSize: 12 }}>Home</Text>
      </View>
      <View style={styles.boxOne}>
        <AntDesign name="playcircleo" size={24} color="#fff" />
        <Text style={{ color: "#fff", fontSize: 12 }}>Home</Text>
      </View>
      <View style={styles.boxOne}>
        <AntDesign name="pluscircleo" size={24} color="#fff" />
        <Text style={{ color: "#fff", fontSize: 12 }}>Home</Text>
      </View>
      <View style={styles.boxOne}>
        <AntDesign name="deleteusergroup" size={24} color="#fff" />
        <Text style={{ color: "#fff", fontSize: 12 }}>Home</Text>
      </View>
      <View style={styles.boxOne}>
        <AntDesign name="deleteusergroup" size={24} color="#fff" />
        <Ionicons name="person" size={24} color="#fff" />
        <Text style={{ color: "#fff", fontSize: 12 }}>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width:"100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
paddingHorizontal:15,
},
  boxOne: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default Footer;
