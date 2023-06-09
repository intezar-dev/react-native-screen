import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
} from "react-native";
import HeadingText from "../../resuable/HeadingText";
import { popularData } from "../../utils/constant";

const MostPopularUserCad = () => {
  return (
    <View>
      <HeadingText leftText={"#Most Popular Users"} />
      <FlatList
        data={popularData}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.avatarContainer}>
              <Image source={item.avatar} style={styles.avatarImg} />
              <View style={styles.middleText}>
                <Text
                  style={{ color: "#fff", fontWeight: "600", fontSize: 15 }}
                >
                  {item.avatarText}
                </Text>
                <Text
                  style={{ color: "gray", fontWeight: "600", fontSize: 15 }}
                >
                  {item.avatarPost}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.btnStyle}>
              <Text style={{ color: "#fff", fontWeight: "900" }}>Follow</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    // backgroundColor: "#fff",
  },
  avatarContainer: {
    width: "45%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  middleText: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  avatarImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  btnStyle: {
    width: 100,
    backgroundColor: "#4A1E0F",
    padding: 8,
    borderRadius: 12,
    marginRight: 12,
    alignItems: "center",
  },
});

export default MostPopularUserCad;
