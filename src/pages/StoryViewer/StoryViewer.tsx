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
import {SafeAreaView} from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';

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

      {/* Story Progress Indicator */}
      <LinearGradient
        colors={['#FF0000', '#FF0000', '#FF0000']}
        style={styles.progressBar}
      />

      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{uri: storyData[currentIndex].image}}
          style={styles.profileImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.name}>{storyData[currentIndex].name}</Text>
          <Text style={styles.timeText}>
            {storyData[currentIndex].createdAt}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()}>
        <Ionicons name="close" size={30} color="white" />
      </TouchableOpacity>

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
    height: height,
    resizeMode: 'cover',
  },
  videoPlaceholder: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  videoText: {
    color: 'white',
    fontSize: 18,
  },
  progressBar: {
    position: 'absolute',
    top: 80,
    height: 4,
    width: width,
    borderRadius: 4,
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  headerText: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeText: {
    color: 'white',
    fontSize: 12,
  },
  viewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewsText: {
    color: 'white',
    fontSize: 12,
    marginLeft: 4,
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
