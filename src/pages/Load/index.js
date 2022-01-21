import React, { useState, useRef, Fragment, useEffect } from 'react';
import { TouchableOpacity, FlatList, StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Load(){
    const navigation = useNavigation();

    const [quizzes, setQuizzes] = useState([]);


    useEffect(() => {
       loadQuizzes(); 
    }, []);

    
    function returnButton(){
        navigation.navigate("Home");
    }

    const cards = ({quiz}) => (
        <View>
            <Text>{quiz.name}</Text>
        </View>
    );

    async function loadQuizzes(){
        try{
            const storedQuizzes = JSON.parse(await AsyncStorage.getItem("quizzes"));
            console.log(storedQuizzes);
            if(storedQuizzes.length > 0){
                setQuizzes(storedQuizzes);
            }
            else{
                let arrayQuizzes = [];
                arrayQuizzes.push(storedQuizzes);

                console.log(arrayQuizzes);

                setQuizzes(arrayQuizzes);
            }
            
        }
        catch(e){

        }
    }

    function displayQuizzes({item}){
        return (
            <View style={styles.questionCard}>
                <View style={styles.iconContainer}>
                    <Feather name="play" size={28}/>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.questionName}>{item.name}</Text>
                    <Text style={styles.questionName}>{console.log(item)}</Text>
                </View>
            </View>
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