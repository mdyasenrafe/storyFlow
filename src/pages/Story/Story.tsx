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

interface Story {
  id: string;
  name: string;
  image: string;
  isOwnStory?: boolean;
}

const data: Story[] = [
  {
    id: '1',
    name: 'your story',
    image: 'https://i.ibb.co/9HhhmF7/image.png',
    isOwnStory: true,
  },
  {
    id: '2',
    name: 'Ann',
    image:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '3',
    name: 'Arlene',
    image: 'https://images.unsplash.com/photo-1724277228191-0cf4c80ee56f?q=80',
  },
  {
    id: '4',
    name: 'Kyle',
    image: 'https://images.unsplash.com/photo-1724579243894-6a8c9bbfe88c',
  },
  {
    id: '5',
    name: 'Shawn',
    image:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '6',
    name: 'Victoria',
    image: 'https://images.unsplash.com/photo-1724579242641-82dd80f13ca5',
  },
  {
    id: '7',
    name: 'Collin',
    image: 'https://plus.unsplash.com/premium_photo-1669050703458-10993eb8fe6d',
  },
];

export const Story: React.FC = () => {
  const renderItem = ({item}: {item: Story}) => (
    <View style={styles.storyContainer}>
      {item.isOwnStory ? (
        <TouchableOpacity>
          <View style={styles.ownStoryBorder}>
            <Image source={{uri: item.image}} style={styles.storyImage} />
            <View style={styles.addIconContainer}>
              <Ionicons name="add-circle" size={24} color="red" />
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Image source={{uri: item.image}} style={styles.storyImage} />
        </TouchableOpacity>
      )}
      <Text style={styles.storyText}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.storyList}
    />
  );
};

const styles = StyleSheet.create({
  storyList: {
    paddingVertical: 10,
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
