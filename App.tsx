import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Story} from './src/pages/Story';
import {StoryViewer} from './src/pages/StoryViewer';
import {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Story" component={Story} />
          <Stack.Screen name="StoryViewer" component={StoryViewer} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
