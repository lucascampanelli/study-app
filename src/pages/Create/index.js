import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

export default function Create(){

    const navigation = useNavigation();

    const [step, setStep] = useState("name");
    const [name, setName] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");

    function returnButton(currentStep){
        if(currentStep === "name"){
            navigation.navigate("Home");
        }
        else if(currentStep === "questions"){
            setStep("name");
        }
    }

    function nextStep(currentStep){
        if(currentStep === "name"){
            setStep("questions");
        }
    }

    return(
        <LinearGradient colors={['#ddf45b', '#00d4ff']}
                        start={{x:0.7,y:-0.4}}
                        style={styles.body}>
            <View style={styles.container}>
                <Feather onPress={() => returnButton(step)} name="chevron-left" size={28} style={styles.btnBack}/>
                { step ? 
                    (step === "name" ? 
                        <View style={styles.formArea}>
                            <Text style={styles.labelForm}>Digite o nome do seu quiz</Text>
                            <TextInput style={styles.input} 
                                        maxLength={26}
                                        onChangeText={text => setName(text)}/>

                            <TouchableOpacity onPress={() => nextStep(step)}>
                                <View style={styles.btnConfirm} onPress={() => nextStep(step)}>
                                    <Text style={styles.btnConfirmText}>OK!</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    :
                        (step === "questions" ? 
                            <View style={styles.questionCreateArea}>
                                <Text style={styles.labelQuestionForm}>Digite a pergunta da questão</Text>
                                <TextInput style={styles.questionInput} 
                                        maxLength={150}
                                        multiline={true}
                                        onChangeText={text => setName(text)}/>

                                <Text style={styles.labelAnswerForm}>Agora, digite as respostas e selecione a afirmação verdadeira</Text>

                                <View style={styles.alternative}>
                                    <View style={styles.alternativeCircle}>
                                        <Text style={styles.alternativeText}>A</Text>
                                    </View>
                                    <TextInput style={styles.answerInput} 
                                            maxLength={150}
                                            multiline={true}
                                            onChangeText={text => setName(text)}
                                            onPress={text => setCorrectAnswer(text)}/>
                                </View>
                                <View style={styles.alternative}>
                                    <View style={styles.alternativeCircle}>
                                        <Text style={styles.alternativeText}>B</Text>
                                    </View>
                                    <TextInput style={styles.answerInput} 
                                            maxLength={150}
                                            multiline={true}
                                            onChangeText={text => setName(text)}
                                            onPress={text => setCorrectAnswer(text)}/>
                                </View>
                                <View style={styles.alternative}>
                                    <View style={styles.alternativeCircle}>
                                        <Text style={styles.alternativeText}>C</Text>
                                    </View>
                                    <TextInput style={styles.answerInput} 
                                            maxLength={150}
                                            multiline={true}
                                            onChangeText={text => setName(text)}
                                            onPress={text => setCorrectAnswer(text)}/>
                                </View>
                                <View style={styles.alternative}>
                                    <View style={styles.alternativeCircle}>
                                        <Text style={styles.alternativeText}>D</Text>
                                    </View>
                                    <TextInput style={styles.answerInput} 
                                            maxLength={150}
                                            multiline={true}
                                            onChangeText={text => setName(text)}
                                            onPress={text => setCorrectAnswer(text)}/>
                                </View>
                                <View style={styles.alternative}>
                                    <View style={styles.alternativeCircle}>
                                        <Text style={styles.alternativeText}>E</Text>
                                    </View>
                                    <TextInput style={styles.answerInput} 
                                            maxLength={150}
                                            multiline={true}
                                            onChangeText={text => setName(text)}
                                            onPress={text => setCorrectAnswer(text)}/>
                                </View>
                            </View>
                        :
                            <View>

                            </View>
                        )
                    )

                :

                <View>
                    <Text>Ocorreu uma falha ao exibir a página de criação.</Text>
                </View>

                }
            </View>
        </LinearGradient>
    );
}