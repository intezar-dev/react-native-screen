import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import HeaderTop from "../resuable/HeaderTop";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Card from "./Card";

const Home3 = () => {
  return (
    <ScrollView>
      <HeaderTop />
      <View style={styles.home_3}>
        <View style={styles.search_section}>
          <View style={styles.left_section}>
            <AntDesign name="search1" size={21} color="#fff" style={{marginRight:5}} />
            <TextInput
              keyboardType="numeric"
              placeholder="Search Forum...."
              placeholderTextColor="#737C96"
              clearTextOnFocus={true}
            />
          </View>
          <View style={{ marginRight: 10 }}>
            <FontAwesome name="shopping-bag" size={26} color="#fff" />
            <Text style={styles.bagStyle}>2</Text>
          </View>
        </View>
        {/* Menu Section */}
        <View style={styles.menu_sections}>
          <TouchableOpacity style={styles.menu_box}>
            <Text style={styles.menu_sm_box}></Text>
            <Text style={styles.menu_sm_box}></Text>
            <Text style={styles.menu_sm_box}></Text>
            <Text style={styles.menu_sm_box}></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu__box}>
            <Text style={{ color: "#000", fontWeight: "500", fontSize: 19 }}>
              Men
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu___box}>
            <Text style={{ color: "#fff", fontWeight: "500", fontSize: 19 }}>
              Women
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu__box}>
            <Text style={{ color: "#000", fontWeight: "500", fontSize: 19 }}>
              Kids
            </Text>
          </TouchableOpacity>
        </View>
        <Card />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  home_3: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    paddingVertical: 32,
    paddingHorizontal: 10,
  },
  search_section: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left_section: {
    width: "80%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 26,
    backgroundColor: "#232327",
  },
  bagStyle: {
    position: "absolute",
    right: -5,
    top: -12,
    padding: 4,
    fontSize: 11,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "red",
    borderRadius: 50,
  },
  menu_sections: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 24,
    paddingHorizontal: 5,
  },
  menu_box: {
    width: 50,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    borderRadius: 15,
  },

  menu_sm_box: {
    width: 21,
    height: 21,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 1,
  },
  menu__box: {
    width: 100,
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  menu___box: {
    width: 100,
    height: 45,
    backgroundColor: "blue",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home3;
