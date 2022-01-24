import { StyleSheet, View } from 'react-native';

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

    modalContainer: {
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },

    modalBackground: {
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },

    modalHeader: {
        width: "100%",
        height: "10%",
        flexDirection: "row",
        marginTop: "5%",
        marginBottom: "5%",
    },

    modalBody: {
        height: "74%",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },

    modalTitleContainer: {
        marginLeft: "10%",
        width: "40%",
    },

    modalExitContainer: {
        alignItems: "flex-end",
        width:"40%",
    },

    closeModal: {
        color: "#85a8ff",
        fontWeight: "bold",
    },

    selectedTitle: {
        fontSize: 18,
    },

    modalOptions: {
        height: 322,
        width: "80%",
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        flexDirection: "column",
        borderRadius: 33,
    },
    
    playBtn: {
        backgroundColor: "#b2f45b",
        width: 200,
        height: 67,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },

    playText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 18,
    },

    editBtn: {
        backgroundColor: "#dedede",
        width: 200,
        height: 67,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },

    editText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 18,
    },

    deleteBtn: {
        backgroundColor: "#f45b5b",
        width: 200,
        height: 67,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },

    deleteText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 18,
    },
});