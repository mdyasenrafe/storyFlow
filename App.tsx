import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {MainHeader} from './src/components/atoms/MainHeader';
import {Story} from './src/pages/Story';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 16}}>
        <MainHeader />
        <Story />
      </View>
    </SafeAreaView>
  );
};

export default App;
