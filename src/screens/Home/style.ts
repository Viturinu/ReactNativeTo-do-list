import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#000000"
    },
    topHeader:{
        width: "100%",
        alignItems: "center",
        marginTop: 43
    },
    input: {
        height: 52,
        borderRadius: 6,
        color: "#808080",
        backgroundColor: "#262626",
        borderColor: "#FFF",
        fontSize: 16,
        marginRight: 4,
        paddingLeft: 8,
        flex: 1
    },
    buttonText:{
        borderRadius: 6,
        height: 52,
        width: 52,
        alignItems: "center",
        backgroundColor: "#1E6F9F",
        justifyContent: "center"
    },
    form: {
        flexDirection: "row",
        marginTop: 35,
        width: "100%",
        paddingLeft:22,
        paddingRight:22
    }
})