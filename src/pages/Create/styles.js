import { StyleSheet, View } from 'react-native';
import constants from 'expo-constants';

export default StyleSheet.create({
    body: {
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
        paddingTop: 25,
        paddingLeft: 22,
        width: 50,
        height: "100%",
        zindex: 5,
        elevation: 5,
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
        marginTop: 0
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

    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },

    questionCount: {
        marginTop: 25,
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 17,
    },

    questionContainer: {
        position: "absolute",
        alignItems: "center",
        width: "100%",
        display: "flex",
    },

    trashContainer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },

    questionHeader: {
        position: "absolute",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },

    btnTrash: {
        color: "#ff5154",
        paddingTop: 25,
        paddingRight: 22,
        width: 50
    },

    btnTrashLock: {
        color: "#ffffff",
        paddingTop: 25,
        paddingRight: 22,
        width: 50,
        opacity: 0.5,
    },

    questionFooter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 50,
        paddingRight: 50,
        marginTop: 7
    },

    btnFinish: {
        backgroundColor: "#f2f2f2",
        height: 53,
        width: 93,
        borderRadius: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    btnFinishText: {
        fontWeight: "bold",
        color: "#00d4ff",
    },

    questionDirection: {
        marginTop: 12,
        color: "#FFFFFF",
    },

    questionDirectionLock: {
        marginTop: 12,
        color: "#FFFFFF",
        opacity: 0.5,
    },
    
});