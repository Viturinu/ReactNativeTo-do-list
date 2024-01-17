import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        height: 58,
        width: "100%",
        marginTop: 6,
        borderWidth: 1,
        borderColor: "#333333",
        backgroundColor: "#262626",
        borderRadius: 6,
        justifyContent: "space-between"
    },
    cardContainerViewText: {
        justifyContent: "center",
        minWidth: "75%",
        maxWidth: "75%",
    },
    cardContainerText: {
        color: "#F2F2F2",
        textAlign: "left",
    },
    cardContainerTextTrue: {
        color: "#808080",
        textDecorationLine: "line-through"
    },
    LogoView: {
        width: "10%",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    checkBox: {
        width: "10%",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
    }
})