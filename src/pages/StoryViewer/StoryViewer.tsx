import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
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
  const numStories = storyData[currentIndex].stories.length;
  const progressBarWidths = useRef(
    storyData[currentIndex].stories.map(() => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    startProgressBar();

    const timer = setTimeout(() => {
      handleSwipe('left');
    }, 10000); // 10 seconds for each story

    return () => {
      clearTimeout(timer);
      progressBarWidths.forEach(progressBar => progressBar.setValue(0)); // Reset the progress bars when unmounting
    };
  }, [currentStoryIndex, currentIndex]);

  const startProgressBar = () => {
    Animated.timing(progressBarWidths[currentStoryIndex], {
      toValue: width / numStories - 4,
      duration: 10000, // 10 seconds
      useNativeDriver: false,
    }).start();
  };

  const handleSwipe = (direction: string) => {
    progressBarWidths[currentStoryIndex].setValue(0);

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

      {/* Story Progress Indicators */}
      <View style={styles.progressBarsContainer}>
        {storyData[currentIndex].stories.map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressBarWrapper,
              {
                width: width / numStories,
              },
            ]}>
            <View
              style={[
                styles.progressBarBackground,
                {
                  backgroundColor:
                    index < currentStoryIndex ? '#8F00DB' : '#ADADAD',
                },
              ]}
            />
            <Animated.View
              style={[
                styles.progressBarFill,
                {
                  width: progressBarWidths[index],
                  backgroundColor:
                    index === currentStoryIndex ? '#8F00DB' : '#ADADAD',
                },
              ]}
            />
          </View>
        ))}
      </View>

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
  progressBarsContainer: {
    position: 'absolute',
    top: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarWrapper: {
    height: 4,
    marginHorizontal: 2,
  },
  progressBarBackground: {
    backgroundColor: '#ADADAD',
    width: '100%',
    height: '100%',
  },
  progressBarFill: {
    position: 'absolute',
    height: '100%',
  },
  header: {
    position: 'absolute',
    top: 120,
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
  closeButton: {
    position: 'absolute',
    top: 120,
    right: 20,
    zIndex: 123,
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
