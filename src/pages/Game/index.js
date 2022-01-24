import React, { useState, Fragment, useEffect } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

export default function Game({route}){

    const navigation = useNavigation();

    const [questionQnt, setQuestionQnt] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(1);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [currentCorrect, setCurrentCorrect] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState("");
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [d, setD] = useState("");
    const [e, setE] = useState("");
    const [inGame, setInGame] = useState(true);
    const [finishedQuestions, setFinishedQuestions] = useState([]);
    const [selectedAlternative, setSelectedAlternative] = useState("");
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [nextQuestion, setNextQuestion] = useState(false);

    const quiz = route.params;


    useEffect(() => {
        if(inGame){
            loadQuestion();
        }
    }, []);

    useEffect(() => {
        loadQuestion();
        setNextQuestion(false);
    }, [nextQuestion]);


    function returnButton(){
        navigation.navigate("Load");
    }

    async function generateRandomQuestion(){
        let random = Math.floor(Math.random() * quiz.questions.length);
        
        while(finishedQuestions.includes(quiz.questions[random].questionId) === true){
            random = Math.floor(Math.random() * quiz.questions.length);
        }

        return random;
    }

    async function loadQuestion(){
        var random = await generateRandomQuestion();

        setCurrentQuestion(quiz.questions[random].question);
        setA(quiz.questions[random].a);
        setB(quiz.questions[random].b);
        setC(quiz.questions[random].c);
        setD(quiz.questions[random].d);
        setE(quiz.questions[random].e);
        setCurrentCorrect(quiz.questions[random].correctAnswer);
        setQuestionQnt(quiz.questions.length);
        setFinishedQuestions([...finishedQuestions, quiz.questions[random].questionId]);
    }

    function nextStep(){
        if(selectedAnswer !== "" && selectedAnswer !== undefined && selectedAnswer !== null){
            setSelectedAnswer("");
            setSelectedAlternative("");
            if(selectedAnswer === currentCorrect){
                setCorrectAnswers(correctAnswers + 1);
            }
            
            if(questionIndex < questionQnt){
                setQuestionIndex(questionIndex + 1);
                setNextQuestion(true);
            }
            else{
                setInGame(false);
            }
        }
    }

    return (
        <LinearGradient colors={['#91a6ff', '#1f4aff']}
                        start={{x:0.7,y:-0.4}}
                        style={styles.body}>
            
                {
                    inGame ?
                        <View style={styles.container}>
                            <View style={styles.header}>
                                <View style={styles.btnHeader}>
                                    <Feather onPress={() => returnButton()} name="home" size={28} style={styles.btnBack}/>
                                </View>

                                <View style={styles.questionHeader}>
                                    <Text style={styles.questionCount}>Questão {questionIndex}/{questionQnt}</Text>
                                </View>
                            </View>

                            <View style={styles.quizContainer}>
                                <Text style={styles.questionText}>{currentQuestion}</Text>

                                <TouchableOpacity onPress={() => { setSelectedAlternative("a"); setSelectedAnswer(a) } }>
                                    <View style={ selectedAlternative === "a" ? styles.alternativeCorrect : styles.alternative }>
                                        <Text style={ selectedAlternative === "a" ? styles.alternativeTextCorrect : styles.alternativeText }>{a}</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity  onPress={() => { setSelectedAlternative("b"); setSelectedAnswer(b) } }>
                                    <View style={ selectedAlternative === "b" ? styles.alternativeCorrect : styles.alternative}>
                                        <Text style={ selectedAlternative === "b" ? styles.alternativeTextCorrect : styles.alternativeText }>{b}</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity  onPress={() => { setSelectedAlternative("c"); setSelectedAnswer(c) } }>
                                    <View style={ selectedAlternative === "c" ? styles.alternativeCorrect : styles.alternative}>
                                        <Text style={ selectedAlternative === "c" ? styles.alternativeTextCorrect : styles.alternativeText }>{c}</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity  onPress={() => { setSelectedAlternative("d"); setSelectedAnswer(d) } }>
                                    <View style={ selectedAlternative === "d" ? styles.alternativeCorrect : styles.alternative}>
                                        <Text style={ selectedAlternative === "d" ? styles.alternativeTextCorrect : styles.alternativeText }>{d}</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity  onPress={() => { setSelectedAlternative("e"); setSelectedAnswer(e) } }>
                                    <View style={ selectedAlternative === "e" ? styles.alternativeCorrect : styles.alternative}>
                                        <Text style={ selectedAlternative === "e" ? styles.alternativeTextCorrect : styles.alternativeText }>{e}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.footer}>
                                <TouchableOpacity onPress={() => nextStep()}>
                                    <View style={styles.btnFinish}>
                                        <Text style={styles.btnFinishText}>PRÓXIMO</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    :
                        <View style={styles.finalContainer}>
                            {/* <View style={styles.header}>
                                <View style={styles.btnHeader}>
                                    <Feather onPress={() => returnButton()} name="home" size={28} style={styles.btnBack}/>
                                </View>
                            </View> */}

                            <View style={styles.gameStats}>
                                {
                                    correctAnswers === questionQnt ?
                                        <View style={styles.boxCongrat}>
                                            <View style={styles.congratContainer}>
                                                <Text style={styles.congratText}>Fascinante!</Text>
                                            </View>
                                            <View style={styles.pointContainer}>
                                                <View style={styles.pointIconBox}>
                                                    <Feather name="thumbs-up" size={86} style={styles.pointIcon}/>
                                                </View>
                                                <View style={styles.pointInfo}>
                                                    <Text>Você acertou {correctAnswers} de {questionQnt} questões.</Text>
                                                </View>
                                            </View>
                                        </View>
                                    :
                                        correctAnswers >= ((questionQnt/2) + 1) && correctAnswers < questionQnt ?
                                            <View style={styles.boxCongrat}>
                                                <View style={styles.congratContainer}>
                                                    <Text style={styles.congratText}>Muito bem!</Text>
                                                </View>
                                                <View style={styles.pointContainer}>
                                                    <View style={styles.pointIconBox}>
                                                        <Feather name="thumbs-up" size={86} style={styles.pointIcon}/>
                                                    </View>
                                                    <View style={styles.pointInfo}>
                                                        <Text>Você acertou {correctAnswers} de {questionQnt} questões.</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        :
                                            correctAnswers < ((questionQnt/2) + 1) && correctAnswers > 0 ?
                                                <View style={styles.boxCongrat}>
                                                    <View style={styles.congratContainer}>
                                                        <Text style={styles.congratText}>Continue tentando</Text>
                                                    </View>
                                                    <View style={styles.pointContainer}>
                                                        <View style={styles.pointIconBox}>
                                                            <Feather name="thumbs-up" size={86} style={styles.pointIcon}/>
                                                        </View>
                                                        <View style={styles.pointInfo}>
                                                            <Text>Você acertou {correctAnswers} de {questionQnt} questões.</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            :
                                                correctAnswers === 0 ?
                                                    <View style={styles.boxCongrat}>
                                                        <View style={styles.congratContainer}>
                                                            <Text style={styles.congratText}>Não desista</Text>
                                                        </View>
                                                        <View style={styles.pointContainer}>
                                                            <View style={styles.pointIconBox}>
                                                                <Feather name="thumbs-up" size={86} style={styles.pointIcon}/>
                                                            </View>
                                                            <View style={styles.pointInfo}>
                                                                <Text>Você acertou {correctAnswers} de {questionQnt} questões.</Text>
                                                            </View>
                                                        </View>
                                                    </View>

                                                :
                                                    <Fragment></Fragment>
                                }
                                
                                <View style={styles.optionsContainer}>
                                    <View style={styles.doneContainer}>
                                        <TouchableOpacity onPress={() => returnButton()}>
                                            <View style={styles.btnDone}>
                                                <Text style={styles.btnDoneText}>FINALIZAR</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.shareContainer}>
                                        <TouchableOpacity>
                                            <View style={styles.btnShare}>
                                                <Feather name="share-2" size={28} style={styles.btnShareIcon}/>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                }

        </LinearGradient>
    );
}