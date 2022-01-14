import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.subtitle}>Bem-vindo ao</Text>
                <Text style={styles.title}>Study!</Text>
                <Text style={styles.titleInfo}>Crie seus próprios questionários e responda de forma aleatória</Text>
            </View>

            <View style={styles.btnContainer}>
                
                <LinearGradient style={styles.btnCreate} 
                                colors={['#ddf45b', '#00d4ff']}
                                start={{x:0,y:1}}
	                            end={{x:3,y:1}}>

                    <View style={styles.btnTextBox}>
                        <Text style={styles.btnDescript}>Iniciar um novo questionário</Text>
                        <Text style={styles.btnTextHome}>Criar</Text>
                    </View>

                </LinearGradient>

                <LinearGradient style={styles.btnLoad} 
                                colors={['#ff88f8', '#ff5154']}
                                start={{x:-1,y:1}}
	                            end={{x:1.5,y:1}}
                                onPress={() => this.props.navigation.navigate('Create')}>

                    <View style={styles.btnTextBox}>
                        <Text style={styles.btnDescript}>Visualizar meus questionários</Text>
                        <Text style={styles.btnTextHome}>Carregar quizzes</Text>
                    </View>

                </LinearGradient>

                <LinearGradient style={styles.btnOptions} 
                                colors={['#91a6ff', '#1f4aff']}
                                start={{x:0,y:1}}
	                            end={{x:2,y:1}}
                                onPress={() => this.props.navigation.navigate('Create')}>

                    <View style={styles.btnTextBox}>
                        <Text style={styles.btnDescript}>Alterar minhas preferências</Text>
                        <Text style={styles.btnTextHome}>Opções</Text>
                    </View>
                    
                </LinearGradient>
            </View>
        </View>
    );
}