import React, { useState, useRef, Fragment, useEffect } from 'react';
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
    const [correctAlternative, setCorrectAlternative] = useState("");
    const [question, setQuestion] = useState("");
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [d, setD] = useState("");
    const [e, setE] = useState("");
    const [questionId, setQuestionId] = useState(0);
    const [questionQnt, setQuestionQnt] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [quiz, setQuiz] = useState([]);


    // useEffect(() => {
    //     console.log(questions);
    // }, [questions]);

    useEffect(() => {
        loadQuestion();
    }, [questionId]);


    /**
     * Método responsável por controlar e executar a função do botão de retorno.
     * @param {string} currentStep Identifica a página atual do componente de criação.
     */
    function returnButton(currentStep){
        if(currentStep === "name"){
            navigation.navigate("Home");
        }
        else if(currentStep === "questions"){
            setStep("name");
        }
    }

    /**
     * Método responsável por controlar a mudança de etaoas do componente de criação.
     * @param {string} currentStep Identifica a página atual do componente de criação.
     */
    function nextStep(currentStep){
        if(currentStep === "name"){
            setStep("questions");

            if(questionId === 0){
                setQuestionId(questionId + 1);
                setQuestionQnt(questionQnt + 1);
            }
        }
        else if(currentStep === "questions"){
            setQuiz({
                name: name,
                questions: questions
            });
        }
    }

    /**
     * Método responsável por controlar a exibição das questões, avançando/criando ou retrocedendo uma questão.
     * @param {string} action Identifica o tipo de ação que o método irá executar. 
     * Enviar "next" para avançar a questão ou "back" para voltá-la
     */
    function questionStep(action){
        if(action === "back"){
            if(questionId > 1){
                if(questionId === questionQnt){
                    createQuestion();
                }
                setQuestionId(questionId - 1);

                loadQuestion();
            }
        }
        else{
            if(questionId === questionQnt){
                createQuestion();
                setQuestionQnt(questionQnt + 1);

                setQuestion("");
                setA("");
                setB("");
                setC("");
                setD("");
                setE("");
                setCorrectAnswer("");
            }

            setQuestionId(questionId + 1);
        }
    }

    /**
     * Método responsável por salvar a questão em edição atual.
     */
    function createQuestion(){
        setQuestions([...questions, {
            question: question,
            a: a,
            b: b,
            c: c,
            d: d,
            e: e,
            correctAnswer: correctAnswer,
            questionId: questionId
        }]);
    }

    /**
     * Método responsável por remover a questão atualmente exibida no componente.
     */
    function removeQuestion(){
        if(questionQnt > 1){
            for(let i = 0; i < questions.length; i++){
                if(i === questionId - 1){
                    questions.splice(i, 1);
                    break;
                }
            }
    
            setQuestionQnt(questionQnt - 1);
            
            if(questionId > 1){
                setQuestionId(questionId - 1);
            }
            else if(questionId == 1){
                loadFirstQuestion();
            }
        }
    }

    /**
     * Método responsável por carregar a questão do índice atualmente exibido no componente.
     */
    function loadQuestion(){
        if(questions.length > 0){
            questions.forEach(question => {
                if(question.questionId === questionId){
                    setQuestion(question.question);
                    setA(question.a);
                    setB(question.b);
                    setC(question.c);
                    setD(question.d);
                    setE(question.e);
                    setCorrectAnswer(question.correctAnswer);
                }
            });
        }
    }

    function loadFirstQuestion(){
        if(questions.length > 0){
            setQuestion(questions[0].question);
            setA(questions[0].a);
            setB(questions[0].b);
            setC(questions[0].c);
            setD(questions[0].d);
            setE(questions[0].e);
            setCorrectAnswer(questions[0].correctAnswer);
        }
    }

    return(
        <LinearGradient colors={['#ddf45b', '#00d4ff']}
                        start={{x:0.7,y:-0.4}}
                        style={styles.body}>
            <View style={styles.container}>
                {/* HEADER */}
                {
                    step ? 
                        
                            <View style={styles.header}>
                                <Feather onPress={() => returnButton(step)} name="home" size={28} style={styles.btnBack}/>
                                    
                                    {/* Contador de questões */}
                                    {
                                    step === "questions" ? 
                                        <View style={styles.questionHeader}>
                                            <View style={styles.questionContainer}>
                                                <Text style={styles.questionCount}>Questão {questionId}/{questionQnt}</Text>
                                            </View>
                                            <View style={styles.trashContainer}>
                                                {
                                                    questionQnt > 1 ?
                                                        <Feather onPress={() => removeQuestion()} name="trash-2" size={28} style={styles.btnTrash}/>
                                                    :
                                                        <Feather onPress={() => removeQuestion()} name="trash-2" size={28} style={styles.btnTrashLock}/>
                                                }
                                            </View>
                                        </View>
                                    :
                                        <Fragment></Fragment>
                                    }
                            </View>
                        
                    :
                        <Fragment></Fragment>
                }
                
                {/* BODY */}
                { step ? 
                    (step === "name" ? 
                        <View style={styles.formArea}>
                            <Text style={styles.labelForm}>Digite o nome do seu quiz</Text>
                            <TextInput style={styles.input} 
                                        maxLength={26}
                                        onChangeText={text => setName(text)}/>

                            <TouchableOpacity onPress={() => nextStep(step)}>
                                <View style={styles.btnConfirm}>
                                    <Text style={styles.btnConfirmText}>OK!</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    :
                        (step === "questions" ? 
                            <View>
                                <View style={styles.questionCreateArea}>
                                    <Text style={styles.labelQuestionForm}>Digite a pergunta da questão</Text>
                                    <TextInput style={styles.questionInput} 
                                            maxLength={150}
                                            multiline={true}
                                            value={question}
                                            onChangeText={text => setQuestion(text)}/>

                                    <Text style={styles.labelAnswerForm}>Agora, digite as respostas e selecione a afirmação verdadeira</Text>

                                    <View style={styles.alternative}>
                                        <View style={styles.alternativeCircle}>
                                            <Text style={styles.alternativeText} onPress={() => setCorrectAnswer(a)}>A</Text>
                                        </View>
                                        <TextInput  style={styles.answerInput} 
                                                    maxLength={150}
                                                    value={a}
                                                    multiline={true}
                                                    onChangeText={text => setA(text)}
                                                    onPress={text => setCorrectAnswer(text)}/>
                                    </View>
                                    <View style={styles.alternative}>
                                        <View style={styles.alternativeCircle}>
                                            <Text style={styles.alternativeText} onPress={() => setCorrectAnswer(b)}>B</Text>
                                        </View>
                                        <TextInput  style={styles.answerInput} 
                                                    maxLength={150}
                                                    multiline={true}
                                                    value={b}
                                                    onChangeText={text => setB(text)}
                                                    onPress={text => setCorrectAnswer(text)}/>
                                    </View>
                                    <View style={styles.alternative}>
                                        <View style={styles.alternativeCircle}>
                                            <Text style={styles.alternativeText} onPress={() => setCorrectAnswer(c)}>C</Text>
                                        </View>
                                        <TextInput  style={styles.answerInput} 
                                                    maxLength={150}
                                                    multiline={true}
                                                    value={c}
                                                    onChangeText={text => setC(text)}
                                                    onPress={text => setCorrectAnswer(text)}/>
                                    </View>
                                    <View style={styles.alternative}>
                                        <View style={styles.alternativeCircle}>
                                            <Text style={styles.alternativeText} onPress={() => setCorrectAnswer(d)}>D</Text>
                                        </View>
                                        <TextInput  style={styles.answerInput} 
                                                    maxLength={150}
                                                    multiline={true}
                                                    value={d}
                                                    onChangeText={text => setD(text)}
                                                    onPress={text => setCorrectAnswer(text)}/>
                                    </View>
                                    <View style={styles.alternative}>
                                        <View style={styles.alternativeCircle}>
                                            <Text style={styles.alternativeText} onPress={() => setCorrectAnswer(e)}>E</Text>
                                        </View>
                                        <TextInput  style={styles.answerInput} 
                                                    maxLength={150}
                                                    multiline={true}
                                                    value={e}
                                                    onChangeText={text => setE(text)}
                                                    onPress={text => setCorrectAnswer(text)}/>
                                    </View>
                                </View>

                                <View style={styles.questionFooter}>
                                    {
                                        questionId === 1 ?
                                            <Feather name="chevron-left" size={28} style={styles.questionDirectionLock} onPress={() => questionStep("back")}/>
                                        :
                                            <Feather name="chevron-left" size={28} style={styles.questionDirection} onPress={() => questionStep("back")}/>
                                    }
                                    
                                    <TouchableOpacity onPress={() => nextStep(step)}>
                                        <View style={styles.btnFinish}>
                                            <Text style={styles.btnFinishText}>CONCLUIR</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <Feather name="chevron-right" size={28} style={styles.questionDirection} onPress={() => questionStep("next")}/>
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