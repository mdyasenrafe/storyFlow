import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Story} from './src/pages/Story';
import {StoryViewer} from './src/pages/StoryViewer';
import {RootStackParamList} from './types';
import {UploadOptions} from './src/pages/UploadOptions/UploadOptions';
import {StoriesProvider} from './src/context/StoriesProvider';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StoriesProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Story" component={Story} />
            <Stack.Screen name="StoryViewer" component={StoryViewer} />
            <Stack.Screen name="UploadOptions" component={UploadOptions} />
          </Stack.Navigator>
        </StoriesProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
