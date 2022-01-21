import { StyleSheet, View } from 'react-native';
import constants from 'expo-constants';

export default StyleSheet.create({
    body: {
        height: "100%"
    },

    btnBack: {
        color: "#FFFFFF",
        paddingTop: 25,
        paddingLeft: 22,
    },

    header: {
        height: "7%",
        marginBottom: 10,
    },

    container: {
        width: "100%",
        height: "100%",
        padding: 50,
    },

    nameContainer: {
        justifyContent: "center",
        width: "40%"
    },

    questionName: {
        fontSize:22,
    },

    iconContainer: {
        justifyContent: "center",
        flexWrap: "width",
    },

    questionCard: {
        width: "100%",
        marginBottom: 33,
        borderRadius: 22,
        height: 100,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        justifyContent: "space-around",
    },

    quizList: {
        height: "10%",
    },
});