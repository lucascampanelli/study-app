import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Create from './pages/Create';

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ 
                                                headerShown: false,
                                                cardStyle: { backgroundColor: "#FFFFFF" }
                                              }}>
                <AppStack.Screen name='Home' component={Home}/>
                <AppStack.Screen name='Create' component={Create}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}