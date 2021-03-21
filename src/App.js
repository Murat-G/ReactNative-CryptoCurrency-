import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import DetailCoins from './pages/DetailCoins';
import Exchange from './pages/Exchange';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="ExchangePage" component={Exchange} />
                    <Stack.Screen name="HomePage" component={Home} />
                    <Stack.Screen name="DetailCoinsPage" component={DetailCoins} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
