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
    form: {
        flexDirection: "row",
        marginTop: 35,
        width: "100%",
        paddingLeft:22,
        paddingRight:22
    },
    input: {
        height: 52,
        borderRadius: 6,
        color: "#808080",
        backgroundColor: "#262626",
        fontSize: 16,
        marginRight: 4,
        paddingLeft: 8,
        flex: 1
    },
    inputFocused:{
        borderWidth: 1,
        borderColor: "#5E60CE",
        color: "#F2F2F2"
    },
    buttonText:{
        borderRadius: 6,
        height: 52,
        width: 52,
        alignItems: "center",
        backgroundColor: "#1E6F9F",
        justifyContent: "center"
    },
    toDoListContainer:{
        flex:1,
        marginTop: 22
    },
    toDoListStatus:{
        flexDirection: "row",
        justifyContent: "space-between",
        height: 19,
        paddingLeft:22,
        paddingRight:22,
        marginBottom: 20        
    },
    activiesCreatedContainer:{
        flexDirection: "row",
        height: 19,
        width: 87
    },
    activiesCreatedText:{
        color: "#4EA8DE",
        marginRight: 8
    },
    activiesCreatedNumber:{
        textAlign: "center",
        width: 25,
        height: 19,
        borderRadius: 999,
        backgroundColor:"#333333",
        color: "#D9D9D9"
    },
    activiesDoneContainer:{
        flexDirection: "row",
        height: 19,
        width: 87
    },
    activiesDoneText:{
        color: "#8284FA",
        marginRight: 8
    },
    activiesDoneNumber:{
        textAlign: "center",
        width: 25,
        height: 19,
        borderRadius: 999,
        backgroundColor:"#333333",
        color: "#D9D9D9"
    },
    toDoListTrue:{
        width: "100%",
        borderTopWidth: 1,
        borderColor: "white",
        paddingLeft:12,
        paddingRight:12,
        borderTopColor: "#262626",
    },
})