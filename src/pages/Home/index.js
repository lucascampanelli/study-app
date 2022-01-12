import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from './styles';

export default function Home(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.subtitle}>Bem-vindo ao</Text>
                <Text style={styles.title}>Study!</Text>
                <Text style={styles.titleInfo}>Crie seus próprios questionários e responda de forma aleatória</Text>
            </View>

            <View>
                <Button onPress={() => this.props.navigation.navigate('Create')}/>
            </View>
        </View>
    );
}