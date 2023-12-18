import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, Text, View, Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Load(){
    const navigation = useNavigation();

    const [quizzes, setQuizzes] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [quizSelected, setQuizSelected] = useState({});
    const [removed, setRemoved] = useState(false);

    useEffect(() => {
       loadQuizzes(); 
    }, []);

    useEffect(() => {
        if(removed === true){
            storeQuizzes(); 
            loadQuizzes(); 
            setRemoved(false);
        }
     }, [removed]);

    
    function returnButton(){
        navigation.navigate("Home");
    }

    async function storeQuizzes(){
        try{
            await AsyncStorage.setItem("quizzes", JSON.stringify(quizzes));
        }
        catch(e){

        }
    }

    async function deleteQuiz(){
        const storedQuizzes = JSON.parse(await AsyncStorage.getItem("quizzes"));

        if(storedQuizzes !== null && storedQuizzes !== undefined){
            if(storedQuizzes.length > 0){
                for(let i = 0; i < storedQuizzes.length; i++){
                    if(storedQuizzes[i].name === quizSelected.name){
                        storedQuizzes.splice(i, 1);

                        if(storedQuizzes.length > 0){
                            setQuizzes(storedQuizzes);
                        }
                        else{
                            setQuizzes(null);
                        }
                        
                        setRemoved(true);
                        setShowOptions(false);
                        break;
                    }
                }
            }
            else{
                let arrayQuizzes = [];
                arrayQuizzes.push(storedQuizzes);
    
                for(let i = 0; i < arrayQuizzes.length; i++){
                    if(arrayQuizzes[i].name === quizSelected.name){
                        arrayQuizzes.splice(i, 1);

                        if(arrayQuizzes.length > 0){
                            setQuizzes(arrayQuizzes);
                        }
                        else{
                            setQuizzes(null);
                        }
                        
                        setRemoved(true);
                        setShowOptions(false);
                        break;
                    }
                }
            }
        }
    }

    async function loadQuizzes(){
        try{
            const storedQuizzes = JSON.parse(await AsyncStorage.getItem("quizzes"));
            if(storedQuizzes.length > 0){
                setQuizzes(storedQuizzes);
            }
            else{
                let arrayQuizzes = [];
                arrayQuizzes.push(storedQuizzes);

                setQuizzes(arrayQuizzes);
            }            
        }
        catch(e){

        }
    }

    function playQuiz(){
        setShowOptions(false);
        navigation.navigate("Game", quizSelected);
    }

    function editQuiz(){
        setShowOptions(false);
        navigation.navigate("Edit", quizSelected);
    }

    function displayQuizzes({item}){
        return (
            <TouchableOpacity onPress={() => {setShowOptions(true); setQuizSelected(item)}}>
                <View style={styles.questionCard}>
                    <View style={styles.iconContainer}>
                        <Feather name="play" size={28}/>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.questionName}>{item.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return(
        <LinearGradient colors={['#ff88f8', '#ff5154']}
                        start={{x:0.7,y:-0.4}}
                        style={styles.body}>
            
            <View style={styles.header}>
                <Feather onPress={() => returnButton()} name="home" size={28} style={styles.btnBack}/>
            </View>

            <View style={styles.container}>
                <Modal  visible={showOptions}
                        transparent={true}
                        animationType="fade"
                        statusBarTranslucent={true}
                        presentationStyle="overFullScreen">

                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.modalBackground} onPress={() => setShowOptions(false)}>
                        </TouchableOpacity>

                        <View style={styles.modalOptions}>
                            <View style={styles.modalHeader}>
                                <View style={styles.modalTitleContainer}>
                                    <Text style={styles.selectedTitle} numberOfLines={1}>{quizSelected.name}</Text>
                                </View>
                                <View style={styles.modalExitContainer}>
                                    <Text style={styles.closeModal} onPress={() => setShowOptions(false)}>Cancelar</Text>
                                </View>
                            </View>
                            <View style={styles.modalBody}>
                                <TouchableOpacity onPress={() => playQuiz()}>
                                    <View style={styles.playBtn}>
                                        <Text style={styles.playText}>JOGAR</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => editQuiz()}>
                                    <View style={styles.editBtn}>
                                        <Text style={styles.editText}>EDITAR</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => deleteQuiz()}>
                                    <View style={styles.deleteBtn}>
                                        <Text style={styles.deleteText}>EXCLUIR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </Modal>

                {
                    quizzes !== null ?
                        quizzes.length > 0 ?
                            <FlatList   data={quizzes}
                                        renderItem={displayQuizzes}
                                        keyExtractor={item => item.name}
                                        style={styles.quizList}/>
                        :
                            <Text>Você ainda não criou nenhum quiz :(</Text>
                    :
                        <Text>Você ainda não criou nenhum quiz :(</Text>
                }
                
            </View>

        </LinearGradient>
    );
}