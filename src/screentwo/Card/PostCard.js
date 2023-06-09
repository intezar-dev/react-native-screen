import { View, StyleSheet, Text, Image } from "react-native";
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
const PostCard = ({ userName, userImg, userStatus, userText }) => {
    return (
        <View style={styles.postContainer}>
            <View style={styles.postBox}>
                <View style={styles.flexStyle}>
                    <Image source={userImg} style={{ width: 32, height: 32, borderRadius: 50 }} />
                    <Text style={styles.userNameStyle}>{userName}</Text>
                </View>
                <Text style={styles.dummyText}>{userStatus}</Text>
            </View>
            <Text style={styles.textStyle}>{userText}</Text>
            <View style={styles.commentSection}>
                <View style={styles.flexStyle}>
                    <Entypo name="emoji-flirt" size={19} color="#4F17CA" />
                    <Text style={styles.iconText}>42</Text>
                    <AntDesign name="message1" size={19} color="#fff" />
                    <Text style={styles.iconText}>16</Text>
                    <MaterialCommunityIcons name="arrow-left-top" size={24} color="#fff" />
                    <Text style={styles.iconText}>Reply</Text>
                    <AntDesign name="eye" size={19} color="#fff" />
                    <Text style={styles.iconText}>42</Text>
                </View>
                <View style={styles.flexStyle}>
                    <AntDesign name="delete" size={19} color="#fff" style={{ marginLeft: 5 }} />
                    <Entypo name="edit" size={19} color="#fff" style={{ marginLeft: 15 }} />
                    <Entypo name="dots-three-vertical" size={19} color="#fff" style={{ marginLeft: 5 }} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    postContainer: {
        width: "98%",
        marginBottom: 32
    },
    postBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    dummyText: {
        color: "gray"
    },
    userNameStyle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
        paddingHorizontal: 15
    },
    textStyle: {
        color: "#fff",
        fontWeight: "500",
        fontSize: 13,
        lineHeight: 19,
        marginTop: 10,
        opacity: 0.6
    },
    commentSection: {
        width: "100%",
        padding: 10,
        marginTop: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#262626",
    },
    flexStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    iconText: {
        color: "#fff",
        marginLeft: 8,
        marginRight: 10,
    }
});

export default PostCard;
