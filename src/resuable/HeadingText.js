import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const HeadingText = ({leftText}) => {
    return (
        <View style={styles.viewAll}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons name="coronavirus" size={24} color="#86E5C6" />
                <Text style={styles.textBold}>{leftText}</Text>
            </View>
            <AntDesign name="arrowright" size={24} color="#fff" />
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default HeadingText;
