import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {RootNavigationProp, TStory} from '../../../types';
import {MainHeader} from '../../components/atoms/MainHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import moment from 'moment';
import useStories from '../../hooks/useStories';

export const Story = ({navigation}: RootNavigationProp<'Story'>) => {
  const {stories: data} = useStories();
  const renderItem = ({item, index}: {item: TStory; index: number}) => (
    <View style={styles.storyContainer}>
      {item.isOwnStory ? (
        <TouchableOpacity
          onPress={
            item.stories.length !== 0
              ? () =>
                  navigation.navigate('StoryViewer', {
                    initialIndex: index,
                  })
              : () => {}
          }>
          <View
            style={[
              styles.ownStoryBorder,
              item.stories.length !== 0 ? {borderWidth: 2} : {borderWidth: 0},
            ]}>
            <Image source={{uri: item.image}} style={styles.storyImage} />
            <TouchableOpacity
              style={styles.addIconContainer}
              onPress={() => {
                navigation.navigate('UploadOptions');
              }}>
              <Ionicons name="add-circle" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('StoryViewer', {
              initialIndex: index,
            })
          }>
          <Image source={{uri: item.image}} style={styles.storyImage} />
        </TouchableOpacity>
      )}
      <Text style={styles.storyText}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <MainHeader />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storyList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  storyList: {
    paddingVertical: 16,
  },
  storyContainer: {
    alignItems: 'center',
    marginRight: 16,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  ownStoryBorder: {
    borderColor: 'red',
    borderRadius: 35,
    padding: 2,
  },
  addIconContainer: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  storyText: {
    marginTop: 4,
    fontSize: 12,
    color: '#333',
  },
});
