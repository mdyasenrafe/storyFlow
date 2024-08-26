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

const data: TStory[] = [
  {
    id: '1',
    name: 'your story',
    image: 'https://i.ibb.co/9HhhmF7/image.png',
    isOwnStory: true,
    createdAt: moment().subtract(2, 'hours').fromNow(),
    stories: [
      {id: 'story1', url: 'https://i.ibb.co/9HhhmF7/image.png', type: 'image'},
      {id: 'story2', url: 'https://i.ibb.co/xyz.png', type: 'image'},
    ],
  },
  {
    id: '2',
    name: 'Ann',
    image:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    createdAt: moment().subtract(4, 'hours').fromNow(), // 4 hours ago
    stories: [
      {
        id: 'story1',
        url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        type: 'image',
      },
    ],
  },
  {
    id: '3',
    name: 'Arlene',
    image: 'https://images.unsplash.com/photo-1724277228191-0cf4c80ee56f?q=80',
    createdAt: moment().subtract(6, 'hours').fromNow(), // 6 hours ago
    stories: [
      {
        id: 'story1',
        url: 'https://images.unsplash.com/photo-1724277228191-0cf4c80ee56f?q=80',
        type: 'image',
      },
      {
        id: 'story2',
        url: 'https://images.unsplash.com/photo-6543210987654-bcdefabcdef?q=80',
        type: 'image',
      },
    ],
  },
  {
    id: '4',
    name: 'Kyle',
    image: 'https://images.unsplash.com/photo-1724579243894-6a8c9bbfe88c',
    createdAt: moment().subtract(8, 'hours').fromNow(), // 8 hours ago
    stories: [
      {
        id: 'story1',
        url: 'https://images.unsplash.com/photo-1724579243894-6a8c9bbfe88c',
        type: 'image',
      },
      {
        id: 'story2',
        url: 'https://images.unsplash.com/photo-abcdef0123456-bcdefabcdef?q=80',
        type: 'video',
      },
    ],
  },
  {
    id: '5',
    name: 'Shawn',
    image:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    createdAt: moment().subtract(10, 'hours').fromNow(), // 10 hours ago
    stories: [
      {
        id: 'story1',
        url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        type: 'image',
      },
      {
        id: 'story2',
        url: 'https://images.unsplash.com/photo-6543210987654-bcdefabcdef?q=80',
        type: 'image',
      },
    ],
  },
  {
    id: '6',
    name: 'Victoria',
    image: 'https://images.unsplash.com/photo-1724579242641-82dd80f13ca5',
    createdAt: moment().subtract(12, 'hours').fromNow(), // 12 hours ago
    stories: [
      {
        id: 'story1',
        url: 'https://images.unsplash.com/photo-1724579242641-82dd80f13ca5',
        type: 'image',
      },
      {
        id: 'story2',
        url: 'https://images.unsplash.com/photo-abcdef0123456-bcdefabcdef?q=80',
        type: 'video',
      },
    ],
  },
  {
    id: '7',
    name: 'Collin',
    image: 'https://plus.unsplash.com/premium_photo-1669050703458-10993eb8fe6d',
    createdAt: moment().subtract(14, 'hours').fromNow(), // 14 hours ago
    stories: [
      {
        id: 'story1',
        url: 'https://plus.unsplash.com/premium_photo-1669050703458-10993eb8fe6d',
        type: 'image',
      },
      {
        id: 'story2',
        url: 'https://plus.unsplash.com/photo-abcdef0123456-bcdefabcdef?q=80',
        type: 'image',
      },
    ],
  },
];

export const Story = ({navigation}: RootNavigationProp<'Story'>) => {
  const renderItem = ({item, index}: {item: TStory; index: number}) => (
    <View style={styles.storyContainer}>
      {item.isOwnStory ? (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('StoryViewer', {
              storyData: data,
              initialIndex: index,
            })
          }>
          <View style={styles.ownStoryBorder}>
            <Image source={{uri: item.image}} style={styles.storyImage} />
            <View style={styles.addIconContainer}>
              <Ionicons name="add-circle" size={24} color="red" />
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('StoryViewer', {
              storyData: data,
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
    borderWidth: 2,
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
