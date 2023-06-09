import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { cardData } from "../../utils/constant";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Card = () => {
  return (
    <View style={styles.card}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cardData.map((data) => (
          <View style={styles.card_box}>
            <Image source={data.cardImg} style={styles.card_img} />
            <Text style={styles.cardTextStyle}>{data.title}</Text>
            <Text style={styles.cardTextStyle}>{data.dummyText}</Text>
            <TouchableOpacity style={styles.cardBtn}>
              <Text>{data.cardbtn}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.viewAll}>
        <Text style={styles.textBold}>Groups</Text>
        <Text style={styles.textNormal}>See All</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.cardIcons}>
          <AntDesign name="playcircleo" size={35} color="#335248" />
          <Text style={styles.cardTextStyle}>Job i..</Text>
        </View>
        <View style={styles.cardIcons}>
          <Entypo name="code" size={35} color="#EEA956" />
          <Text style={styles.cardTextStyle}>zamoto</Text>
        </View>
        <View style={styles.cardIcons}>
          <AntDesign name="playcircleo" size={35} color="#444F5F" />
          <Text style={styles.cardTextStyle}>Nodejs</Text>
        </View>
        <View style={styles.cardIcons}>
          <AntDesign name="playcircleo" size={35} color="#EEA956" />
          <Text style={styles.cardTextStyle}>Tech ind</Text>
        </View>
        <View style={styles.cardIcons}>
          <AntDesign name="playcircleo" size={35} color="#335248" />
          <Text style={styles.cardTextStyle}>fintech..</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 190,
    marginTop: 12,
  },
  card_box: {
    borderRadius: 15,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
    paddingVertical: 10,
  },
  card_img: {
    width: 165,
    height: 140,
    backgroundColor: "#ccc",
    borderRadius: 15,
  },
  cardBtn: {
    width: 110,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  cardIcons: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  cardTextStyle: {
    color: "#CDCDCF",
    marginTop: 4,
  },
  viewAll: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 26,
    paddingHorizontal: 10,
  },
  textBold: {
    color: "#fff",
    fontSize: 19,
  },
  textNormal: {
    color: "#fff",
    fontSize: 15,
  },
});

export default Card;
