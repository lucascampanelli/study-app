import React, { useState, useRef, Fragment, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Edit({route}){

    const navigation = useNavigation();
    const quizParam = route.params;

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
    const [finished, setFinished] = useState(false);
    const [quiz, setQuiz] = useState({});


    useEffect(() => {
        setQuiz(quizParam);
        setName(quizParam.name);
        setQuestionQnt(quizParam.questions.length);
    }, []);

    useEffect(() => {
        if(questionId > 0){
            loadQuestion();
        }
    }, [questionId]);

    useEffect(() => {
        if(finished){
            setQuiz({
                name: name,
                questions: questions
            });
        }
    }, [questions]);

    useEffect(() => {
        if(finished){
            storeQuiz();
        }
    }, [quiz]);


    /**
     * Método responsável por armazenar o quiz criado na memória do sistema.
     * @param {object} currentQuiz Objeto do quiz que será armazenado com os quizzes salvos na memória.
     */
     async function storeQuiz(){
        try{
            const currentQuizJson = quiz;

            let savedQuizzes = JSON.parse(await AsyncStorage.getItem("quizzes"));

            let quizzes = [];

            if(savedQuizzes === null){
                savedQuizzes = currentQuizJson;
            }
            else{
                if(savedQuizzes.length >= 1){
                    savedQuizzes.push(currentQuizJson);
                }
                else{
                    quizzes.push(savedQuizzes);
                    quizzes.push(currentQuizJson);

                    savedQuizzes = quizzes;
                }
            }
            
            await AsyncStorage.setItem("quizzes", JSON.stringify(savedQuizzes));
        }
        catch(e){

        }
    }

    /**
     * Método responsável por carregar a questão do índice atualmente exibido no componente.
     */
     function loadQuestion(){
        if(quiz !== null && quiz !== undefined){
            if(quiz.questions.length > 0){
                for(let i = 0; i < quiz.questions.length; i++){
                    if(i === questionId - 1){
                        setQuestion(quiz.questions[i].question);
                        setA(quiz.questions[i].a);
                        setB(quiz.questions[i].b);
                        setC(quiz.questions[i].c);
                        setD(quiz.questions[i].d);
                        setE(quiz.questions[i].e);
                        setCorrectAnswer(quiz.questions[i].correctAnswer);
                        setCorrectAlternative(quiz.questions[i].correctAlternative);
                        break;
                    }

                    else if(i === quiz.questions.length - 1){
                        setQuestion("");
                        setA("");
                        setB("");
                        setC("");
                        setD("");
                        setE("");
                        setCorrectAnswer("");
                        setCorrectAlternative("");
                    }
                }
            }
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
                if(quiz.questions[questionId - 1].question === undefined){
                    createQuestion();
                }
                setQuestionQnt(questionQnt + 1);

                setQuestion("");
                setA("");
                setB("");
                setC("");
                setD("");
                setE("");
                setCorrectAnswer("");
                setCorrectAlternative("");
            }
            else{
                questionSave();
            }

            setQuestionId(questionId + 1);
        }
    }

    function questionSave(){
        if(quiz.questions.length > 0){
            for(let i = 0; i < quiz.questions.length; i++){
                if(i === questionId - 1){
                    quiz.questions[i].question = question;
                    quiz.questions[i].a = a;
                    quiz.questions[i].b = b;
                    quiz.questions[i].c = c;
                    quiz.questions[i].d = d;
                    quiz.questions[i].e = e;
                    quiz.questions[i].correctAnswer = correctAnswer;
                    quiz.questions[i].correctAlternative = correctAlternative;
                }
            }
        }
    }

    function nextStep(currentStep){
        if(currentStep === "name"){
            setStep("questions");

            if(questionId === 0){
                setQuestionId(questionId + 1);
            }
        }
        else if(currentStep === "questions"){
            setFinished(true);

            createQuestion();            
        }
    }

    /**
     * Método responsável por controlar e executar a função do botão de retorno.
     * @param {string} currentStep Identifica a página atual do componente de criação.
     */
     function returnButton(currentStep){
        if(currentStep === "name"){
            navigation.navigate("Load");
        }
        else if(currentStep === "questions"){
            setStep("name");
        }
    }

    /**
     * Método responsável por salvar a questão em edição atual.
     */
     function createQuestion(){
         console.log("teste");
        quiz.questions.push({
            question: question,
            a: a,
            b: b,
            c: c,
            d: d,
            e: e,
            correctAnswer: correctAnswer,
            correctAlternative: correctAlternative,
            questionId: questionId
        });
    }

    /**
     * Método responsável por remover a questão atualmente exibida no componente.
     */
     function removeQuestion(){
        if(questionQnt > 1){
            for(let i = 0; i < quiz.questions.length; i++){
                if(i === questionId - 1){
                    quiz.questions.splice(i, 1);
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
     * Método responsável por carregar a primeira questão do array de questões criadas
     */
     function loadFirstQuestion(){
        if(quiz.questions.length > 0){
            setQuestion(quiz.questions[0].question);
            setA(quiz.questions[0].a);
            setB(quiz.questions[0].b);
            setC(quiz.questions[0].c);
            setD(quiz.questions[0].d);
            setE(quiz.questions[0].e);
            setCorrectAnswer(quiz.questions[0].correctAnswer);
            setCorrectAlternative(quiz.questions[0].correctAlternative);
        }
    }

    return(
        <View>
            <LinearGradient colors={['#ddf45b', '#00d4ff']}
                        start={{x:0.7,y:-0.4}}
                        style={styles.body}>

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

                {
                    step ?
                        step === "name" ?
                            <View style={styles.formArea}>
                                <Text style={styles.labelForm}>Qual o nome do seu quiz?</Text>
                                <TextInput  style={styles.input} 
                                            value={name}
                                            onChangeText={text => setName(text)}
                                            maxLength={26}
                                            onChangeText={text => setName(text)}/>

                                <TouchableOpacity onPress={() => nextStep(step)}>
                                    <View style={styles.btnConfirm}>
                                        <Text style={styles.btnConfirmText}>OK!</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        :
                            step === "questions" ?
                                <View>
                                    <View style={styles.creationArea}>
                                        <View style={styles.questionCreateArea}>
                                            <Text style={styles.labelQuestionForm}>Digite a pergunta da questão</Text>
                                            <TextInput style={styles.questionInput} 
                                                    maxLength={150}
                                                    multiline={true}
                                                    value={question}
                                                    onChangeText={text => setQuestion(text)}/>

                                            <Text style={styles.labelAnswerForm}>Agora, digite as respostas e selecione a afirmação verdadeira</Text>

                                            <View style={styles.alternative}>
                                                <TouchableOpacity onPress={() => {setCorrectAnswer(a); setCorrectAlternative("a")}}>
                                                    <View style={ (correctAlternative === "a") ? styles.alternativeCircleCorrect : styles.alternativeCircle}>
                                                        <Text style={styles.alternativeText}>A</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TextInput  style={ (correctAlternative === "a") ? styles.answerInputCorrect : styles.answerInput} 
                                                            maxLength={150}
                                                            value={a}
                                                            multiline={true}
                                                            onChangeText={text => setA(text)}
                                                            onPress={text => setCorrectAnswer(text)}/>
                                            </View>
                                            <View style={styles.alternative}>
                                                <TouchableOpacity onPress={() => {setCorrectAnswer(b); setCorrectAlternative("b")}}>
                                                    <View style={ (correctAlternative === "b") ? styles.alternativeCircleCorrect : styles.alternativeCircle}>
                                                        <Text style={styles.alternativeText}>B</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TextInput  style={ (correctAlternative === "b") ? styles.answerInputCorrect : styles.answerInput}
                                                            maxLength={150}
                                                            multiline={true}
                                                            value={b}
                                                            onChangeText={text => setB(text)}
                                                            onPress={text => setCorrectAnswer(text)}/>
                                            </View>
                                            <View style={styles.alternative}>
                                                <TouchableOpacity onPress={() => {setCorrectAnswer(c); setCorrectAlternative("c")}}>
                                                    <View style={ (correctAlternative === "c") ? styles.alternativeCircleCorrect : styles.alternativeCircle}>
                                                        <Text style={styles.alternativeText}>C</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TextInput  style={ (correctAlternative === "c") ? styles.answerInputCorrect : styles.answerInput}
                                                            maxLength={150}
                                                            multiline={true}
                                                            value={c}
                                                            onChangeText={text => setC(text)}
                                                            onPress={text => setCorrectAnswer(text)}/>
                                            </View>
                                            <View style={styles.alternative}>
                                                <TouchableOpacity onPress={() => {setCorrectAnswer(d); setCorrectAlternative("d")}}>
                                                    <View style={ (correctAlternative === "d") ? styles.alternativeCircleCorrect : styles.alternativeCircle}>
                                                        <Text style={styles.alternativeText}>D</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TextInput  style={ (correctAlternative === "d") ? styles.answerInputCorrect : styles.answerInput} 
                                                            maxLength={150}
                                                            multiline={true}
                                                            value={d}
                                                            onChangeText={text => setD(text)}
                                                            onPress={text => setCorrectAnswer(text)}/>
                                            </View>
                                            <View style={styles.alternative}>
                                                <TouchableOpacity onPress={() => {setCorrectAnswer(e); setCorrectAlternative("e")}}>
                                                    <View style={ (correctAlternative === "e") ? styles.alternativeCircleCorrect : styles.alternativeCircle}>
                                                        <Text style={styles.alternativeText}>E</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TextInput  style={ (correctAlternative === "e") ? styles.answerInputCorrect : styles.answerInput}
                                                            maxLength={150}
                                                            multiline={true}
                                                            value={e}
                                                            onChangeText={text => setE(text)}
                                                            onPress={text => setCorrectAnswer(text)}/>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.questionFooter}>
                                        {
                                            questionId === 1 ?
                                                <Feather name="chevron-left" size={28} style={styles.questionDirectionLock} onPress={() => questionStep("back")}/>
                                            :
                                                <Feather name="chevron-left" size={28} style={styles.questionDirection} onPress={() => questionStep("back")}/>
                                        }
                                        
                                        {
                                            questionQnt > 1 ?
                                                <TouchableOpacity onPress={() => nextStep(step)}>
                                                    <View style={styles.btnFinish}>
                                                        <Text style={styles.btnFinishText}>CONCLUIR</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            :
                                                <View style={styles.btnFinishLock}>
                                                    <Text style={styles.btnFinishText}>CONCLUIR</Text>
                                                </View>
                                        }
                                        
                                        <Feather name="chevron-right" size={28} style={styles.questionDirection} onPress={() => questionStep("next")}/>
                                    </View>
                                </View>
                            :
                                <Fragment></Fragment>
                    :
                    <Fragment></Fragment>
                }

            </LinearGradient>
        </View>
    );
}