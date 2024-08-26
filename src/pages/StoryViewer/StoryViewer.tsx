import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {RootNavigationProp} from '../../../types';
const {width, height} = Dimensions.get('window');

export const StoryViewer = ({
  navigation,
  route,
}: RootNavigationProp<'StoryViewer'>) => {
  const {storyData, initialIndex} = route.params;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const currentStory = storyData[currentIndex].stories[currentStoryIndex];

  const handleSwipe = (direction: string) => {
    if (direction === 'left') {
      if (currentStoryIndex < storyData[currentIndex].stories.length - 1) {
        setCurrentStoryIndex(prevIndex => prevIndex + 1);
      } else if (currentIndex < storyData.length - 1) {
        setCurrentIndex(prevIndex => prevIndex + 1);
        setCurrentStoryIndex(0);
      }
    } else if (direction === 'right') {
      if (currentStoryIndex > 0) {
        setCurrentStoryIndex(prevIndex => prevIndex - 1);
      } else if (currentIndex > 0) {
        setCurrentIndex(prevIndex => prevIndex - 1);
        setCurrentStoryIndex(storyData[currentIndex - 1].stories.length - 1);
      }
    }
  };

  return (
    <View style={styles.container}>
      {currentStory.type === 'image' ? (
        <Image source={{uri: currentStory.url}} style={styles.image} />
      ) : (
        // Replace this with a Video component for real video rendering
        <View style={styles.videoPlaceholder}>
          <Text style={styles.videoText}>Video Placeholder</Text>
        </View>
      )}
      <Text style={styles.text}>{storyData[currentIndex].name}</Text>
      <Text style={styles.timeText}>{storyData[currentIndex].createdAt}</Text>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()}>
        <Ionicons name="close" size={30} color="white" />
      </TouchableOpacity>
      {/* Swipe Gestures */}
      <TouchableOpacity
        style={styles.leftSwipe}
        onPress={() => handleSwipe('right')}
      />
      <TouchableOpacity
        style={styles.rightSwipe}
        onPress={() => handleSwipe('left')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height * 0.8,
    resizeMode: 'contain',
  },
  videoPlaceholder: {
    width: width,
    height: height * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  videoText: {
    color: 'white',
    fontSize: 18,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },
  timeText: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  leftSwipe: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: width / 2,
  },
  rightSwipe: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: width / 2,
  },
});
