import { StyleSheet, View } from 'react-native';

export default StyleSheet.create({
    body: {
        width: "100%",
        height: "100%",
    },

    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "7%",
        justifyContent: "space-between",
        marginBottom: 10,
    },

    questionHeader: {
        width: "60%",
    },

    btnHeader: {
        width: "40%",
    },

    btnBack: {
        color: "#FFFFFF",
        paddingTop: 25,
        paddingLeft: 22,
        width: 50,
        height: "100%",
    },

    questionCount: {
        marginTop: 25,
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 17,
    },

    container: {
        width: "100%",
        height: "100%",
    },

    quizContainer: {
        width: "100%",
        height: "80%",
        alignItems: "center",
        paddingTop: "3%",
        padding: 50
    },

    questionText: {
        color: "#FFFFFF",
        fontSize: 22,
    },

    alternative: {
        backgroundColor: "#FFFFFF",
        height: 80,
        width: 322,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 12,
    },

    alternativeCorrect: {
        backgroundColor: "#91a6ff",
        height: 80,
        width: 322,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 12,
    },

    alternativeTextCorrect: {
        color: "#FFFFFF",
    },

    alternativeText: {
        color: "black",
    },

    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingLeft: 50,
        paddingRight: 50,
        height: "13%",
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

    finalContainer: {
        width: "100%",
        height: "100%",
    },

    gameStats: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        paddingTop: 53,
    },

    congratContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10%",
    },

    congratText: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "bold",
    },

    pointContainer: {
        backgroundColor: "#FFFFFF",
        width: "70%",
        height: "53%",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 33
    },

    pointIconBox: {
        height: "60%",
        justifyContent: "center",
        marginBottom: "5%",
    },

    pointIcon: {
        color: "#000000",
    },

    pointInfo: {
        height: "20%",
    },

    boxCongrat: {
        alignItems: "center",
    },

    optionsContainer: {
        width: "100%",
        flexDirection: "row",
    },

    btnDone: {
        backgroundColor: "#ddf45b",
        alignSelf: "center",
        width: "100%",
        height: "40%",
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
    },

    btnShare: {
        backgroundColor: "#FFFFFF",
        width: "20%",
        height: "40%",
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
    },

    doneContainer: {
        width: "35%",
        marginLeft: 86,
    },

    shareContainer: {
        width: "80%",
        marginLeft: 20
    },
});