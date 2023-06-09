import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import HeaderTop from "../resuable/HeaderTop";
import { Entypo, MaterialIcons, Octicons } from "@expo/vector-icons";
import PostCard from "./Card/PostCard";
import { home_2_Data } from "../utils/constant";

const Home = () => {
  return (
    <ScrollView>
      <HeaderTop />
      <View style={styles.topSection}>
        <View style={styles.top_middle_section}>
          <Octicons name="arrow-left" size={24} color="#fff" />
          <Text style={{ color: "#fff", fontWeight: "800", fontSize: 19 }}>
            Group: Salary Compensation
          </Text>
          <Entypo name="dots-three-vertical" size={24} color="#fff" />
        </View>

        <View style={styles.middle_section}>
          <View style={styles.middle_box}>
            <Text
              style={{
                color: "gray",
                fontWeight: "500",
                width: "100%",
                lineHeight: 21,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <View style={styles.middle_inner_style}>
              <Text style={styles.textStyle}>Main Category :</Text>
              <Text style={{ fontSize: 12, fontWeight: "500", color: "gray" }}>
                Job Seekers
              </Text>
            </View>
          </View>

          <View style={styles.btn_section}>
            <TouchableOpacity style={styles.btnStyle}>
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>
                Join Group
              </Text>
            </TouchableOpacity>
            <View style={styles.avatar_container}>
              {home_2_Data.map((data) => (
                <Image source={data.avatarImg} style={styles.avatrImg} />
              ))}
              <Text style={{ color: "#fff" }}>10k+</Text>
            </View>
          </View>

          {/* Home Heading_section */}
          <View style={styles.heading_section}>
            <Text style={styles.textStyle}>All Post </Text>
            <Entypo name="home" size={24} color="#FF6934" />
            <View style={styles.middle_inner_style}>
              <Text style={styles.textStyle}>Sort By</Text>
              <MaterialIcons name="short-text" size={24} color="#fff" />
            </View>
          </View>
          {/* Card */}
          <PostCard
            userName={"Maude Hall"}
            userImg={require("../../assets/a1.png")}
            userStatus={"15 mins"}
            userText={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 1500s......"
            }
          />
          <PostCard
            userName={"Elize Vincent"}
            userImg={require("../../assets/a1.png")}
            userStatus={"05 Nov 2022"}
            userText={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 1500s......"
            }
          />
          <PostCard
            userName={"Rupesh Shairke"}
            userImg={require("../../assets/a1.png")}
            userStatus={"15 mins"}
            userText={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 1500s......"
            }
          />
          <PostCard
            userName={"Henry Smith"}
            userImg={require("../../assets/a1.png")}
            userStatus={"15 mins"}
            userText={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 1500s......"
            }
          />
          <PostCard
            userName={"Jacob Garacia"}
            userImg={require("../../assets/a1.png")}
            userStatus={"15 mins"}
            userText={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 1500s......"
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topSection: {
    width: "100%",
    backgroundColor: "#000",
    paddingHorizontal: 15,
  },

  top_middle_section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  middle_section: {
    width: "100%",
    alignItems: "center",
  },
  middle_box: {
    width: "80%",
    flexDirection: "column",
    marginBottom: 12,
  },
  middle_inner_style: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn_section: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnStyle: {
    width: 150,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6934",
  },
  avatar_container: {
    flexDirection: "row",
    position: "absolute",
    left: 163,
    top: 21,
  },
  avatrImg: {
    width: 23,
    height: 23,
    marginLeft: -8,
  },
  heading_section: {
    width: "98%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 41,
    justifyContent: "space-between",
  },
  textStyle: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "500",
    opacity: 0.8,
  },
});

export default Home;
