import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import HeaderTop from "../resuable/HeaderTop";
import { AntDesign, Entypo, EvilIcons } from "@expo/vector-icons";
import {sliderImg, selectImgtData, heighlightData,descriptionData} from '../utils/constant'

const Home_4 = () => {
  return (
    <ScrollView>
      <View style={styles.home_4}>
        <HeaderTop />
        <ScrollView horizontal>
          {sliderImg.map((data) => (
            <Image
              source={data.img}
              style={{ width: 200, height: 280, marginLeft: 5, marginTop:12, }}
            />
          ))}
        </ScrollView>

        <View style={styles.innerSextion}>
          <View style={styles.headingStyle}>
            <Text style={styles.heaadingText}>Women &nbsp;> Top Women </Text>
            <Text style={styles.heaadingText}>Brand</Text>
          </View>
          <Text style={styles.normalText}>
            Angle malu zip jeans slim black used
          </Text>

          <View style={styles.priceStyle}>
            <Text style={styles.priceText}>
              $139,00 Was{" "}
              <Text style={{ color: "red", fontSize: 14 }}> $299</Text>
            </Text>
            <Text style={{ fontSize: 14, color: "gray" }}>
              <AntDesign name="check" size={19} color="#fff" />
              FREE SHIPPING
            </Text>
          </View>

          <View style={styles.headingStyle}>
            <TouchableOpacity style={styles.btnStyle}>
              <Text style={{ color: "#000", fontWeight:"600" }}>ADD TO BAG</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle_}>
              <Entypo name="heart-outlined" size={24} color="#fff" />
              <Text style={{ color: "#fff", marginLeft: 14 , fontVariant:"600"}}>WISHLIST</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.headingStyle}>
            <Text style={styles.priceText}>CHOOSE</Text>
            <Text style={styles.colorText}>Size guide</Text>
          </View>

          <View style={styles.headingStyle}>
            <Text style={styles.size_box}>S</Text>
            <Text style={styles.size_box}>M</Text>
            <Text style={styles.size_box_}>L</Text>
            <Text style={styles.size_box}>XL</Text>
            <Text style={styles.size_box}>XXL</Text>
          </View>

          <View style={styles.select}>
            <Text style={styles.priceText}>SELECT</Text>
            <View style={{ flexDirection: "row", alignItems: "flex-start", paddingTop:8 }}>
              {selectImgtData.map((data) => (
                <Image
                  source={data.img}
                  style={{ width: 75, height: 170, margin: 4 }}
                />
              ))}
            </View>
          </View>

          <View style={styles.headingStyle}>
            <Text style={styles.priceText}>HIGHLIGHT</Text>
            <Text style={{ color: "gray" }}>____</Text>
          </View>

          {heighlightData.map((data) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.bulletText}></Text>
              <Text style={styles.normalText}>{data.text}</Text>
            </View>
          ))}

          <View style={styles.headingStyle}>
            <Text style={styles.priceText}>DESCRIPTION</Text>
            <Text style={{ color: "gray" }}>____</Text>
          </View>
          <Text style={{ color: "#fff", opacity: 0.8, fontWeight: "700", lineHeight: 21, paddingVertical: 12 }}>jack made of a loss fit Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </Text>
          {descriptionData.map((data) => (
            <View>
              <View style={styles.headingStyle}>
                <Text style={styles.priceText}>{data.title}</Text>
                <Text style={{ color: "#FFF", fontSize: 24, opacity: 0.7, }}>+</Text>
              </View>
              <Text style={{ borderBottomWidth: 1, borderBottomColor: "#fff", marginTop: -10 }}></Text>
            </View>
          ))}


          {/* Social Media section*/}
          <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", paddingVertical: 15 }}>
            <View style={styles.social_mediaStyle}>
              <Text style={{ color: "#fff" }}>Share</Text>
              <EvilIcons name="sc-facebook" size={29} color="#fff" />
              <AntDesign name="twitter" size={19} color="#fff" />
              <Entypo name="pinterest" size={19} color="#fff" />
              <Entypo name="instagram" size={21} color="#fff" />
            </View>
            <Text style={styles.bottomStyle}>PRODUCT CODE: RFKK1024</Text>
            <Text style={styles.bottomStyle}>TAGS NEW: ARRIVAL, TOP WOMEN</Text>
            <Text style={styles.bottomStyle}>SELLER:RFKK1024</Text>
            <Text style={styles.bottomStyle}>PRODUCT CODE: RFKK1024</Text>
            <Text style={styles.bottomStyle}>BRAND CODE: RFKK1024</Text>
            <Text style={styles.bottomStyle}>REPORT PRODUCT | REPORT SELLER</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  home_4: {
    width: "100%",
    height: "100%",
    paddingVertical: 25,
    backgroundColor: "#000"
  },
  innerSextion: {
    width: "100%",
    backgroundColor: "#000000",
    paddingHorizontal: 15,
  },
  headingStyle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 32,
  },
  priceStyle: {
    width: "98%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 22,
  },
  heaadingText: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "700",
    color: "gray",
  },
  normalText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "500",
    color: "#fff",
    lineHeight: 29,
    opacity: 0.8,
  },
  priceText: {
    color: "#fff",
    fontSize: 21,
    opacity: 1,
    fontWeight: "600",
    opacity:0.8
  },
  btnStyle: {
    width: "45%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 2,
    alignItems: "center",
  },
  btnStyle_: {
    width: "45%",
    backgroundColor: "#000000",
    padding: 9,
    borderRadius: 2,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  colorText: {
    color: "#204560",
    textDecorationColor: "#204560",
    borderBottomWidth: 1,
    borderBottomColor: "#204560",
  },
  size_box: {
    width: 60,
    height: 61,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#000",
    borderRadius: 10,
    fontWeight: "800",
    fontSize: 21,
    paddingTop: 15,
  },
  size_box_: {
    width: 60,
    height: 61,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
    borderRadius: 10,
    fontWeight: "800",
    fontSize: 21,
    paddingTop: 15,
    backgroundColor: "#000",
    borderWidth:1,
    borderColor:"#fff"
  },
  select: {
    paddingVertical: 15,
  },
  bulletText: {
    color: "#fff",
    width: 8,
    height: 8,
    borderRadius: 50,
    marginRight: 15,
    backgroundColor: "#fff",
  },
  // Social Media Section Style
  social_mediaStyle: {
    width: "55%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  bottomStyle: {
    color: "#fff",
    fontWeight: "500",
    opacity: 0.7,
    paddingVertical: 10
  }
});

export default Home_4;
