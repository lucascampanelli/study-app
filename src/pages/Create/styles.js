import { StyleSheet, View } from 'react-native';
import constants from 'expo-constants';

export default StyleSheet.create({
    body: {
        backgroundColor: "red",
        height: "100%",
    },

    formArea: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 374,
    },

    input: {
        backgroundColor: "#f2f2f2",
        width: 280,
        height: 45,
        color: "#00d4ff",
        borderRadius: 50,
        marginTop: 12,
        fontSize: 20,
        padding: 12,
        textAlign: "center",
    }, 

    labelForm: {
        color: "#FFFFFF",
        fontSize: 22
    },

    btnConfirmText: {
        fontWeight: "bold",
        color: "#00d4ff",
    },

    btnConfirm: {
        backgroundColor: "#f2f2f2",
        height: 67,
        width: 100,
        borderRadius: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 86,
    },

    btnBack: {
        color: "#FFFFFF",
        paddingTop: 33,
        paddingLeft: 22,
    },

    questionCreateArea: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    questionInput: {
        backgroundColor: "#f2f2f2",
        width: 280,
        height: 80,
        color: "#00d4ff",
        borderRadius: 10,
        marginBottom: 12,
        fontSize: 15,
        padding: 12,
        textAlign: "center",
    },

    answerInput: {
        backgroundColor: "#f2f2f2",
        width: 280,
        height: 80,
        color: "#00d4ff",
        borderRadius: 10,
        marginBottom: 12,
        fontSize: 15,
        padding: 12,
        textAlign: "center",
    },

    labelQuestionForm: {
        color: "#FFFFFF",
        fontSize: 20,
        marginBottom: 12,
    },

    labelAnswerForm: {
        color: "#FFFFFF",
        fontSize: 20,
        marginBottom: 12,
        marginTop: 3
    },

    alternative: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },

    alternativeCircle: {
        backgroundColor: "#f2f2f2",
        borderRadius: 50,
        marginRight: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 40,
    },

    alternativeText: {
        fontWeight: "bold",
        color: "#000000",
    },
});