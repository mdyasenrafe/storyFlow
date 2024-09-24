import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Ionicons} from '@expo/vector-icons'; // Import vector icons
import {
  useCameraPermissions,
  useMediaLibraryPermissions,
} from 'expo-image-picker';
import {
  getMediaFromGallery,
  openImagePicker,
  showDeniedAlert,
} from '../../utils/mediaHelper';
import {RootNavigationProp, TStory} from '../../../types';
import {ImageOrVideo} from 'react-native-image-crop-picker';
import useStories from '../../hooks/useStories';

// Define types for options
type Option = {
  type: 'click' | 'record' | 'photo' | 'video';
  icon:
    | 'camera-outline'
    | 'videocam-outline'
    | 'image-outline'
    | 'folder-outline';
  label: string;
};

const options: Option[] = [
  {
    type: 'click',
    icon: 'camera-outline',
    label: 'Click',
  },
  {
    type: 'record',
    icon: 'videocam-outline',
    label: 'Record',
  },
  {
    type: 'photo',
    icon: 'image-outline',
    label: 'Photo',
  },
  {
    type: 'video',
    icon: 'folder-outline',
    label: 'Video',
  },
];

export const UploadOptions = ({
  navigation,
  route,
}: RootNavigationProp<'UploadOptions'>) => {
  const {handleImageUpload} = useStories();
  const [, requestMediaPermission] = useMediaLibraryPermissions();
  const [, requestCameraPermission] = useCameraPermissions();

  const checkMediaPermission = async () => {
    const {status} = await requestMediaPermission();
    if (status === 'denied') {
      showDeniedAlert();
    }
  };

  const openCamera = async (handleImageUpload: Function) => {
    const {status} = await requestCameraPermission();
    if (status === 'denied') {
      showDeniedAlert();
    } else {
      try {
        const response = await openImagePicker();
        handleImageUpload(response);
      } catch (e) {
        console.log('something went wrong');
      }
    }
  };

  const handlePhotoSelection = async (handleImageUpload: Function) => {
    try {
      await checkMediaPermission();
      const result = await getMediaFromGallery();
      handleImageUpload(result);
    } catch (error) {
      console.log('Error picking photo:', error);
    }
  };
  const handleVideoSelection = async (handleImageUpload: Function) => {
    console.log('Record or Select Video');
  };
  const handleOptionPress = async (option: Option) => {
    switch (option.type) {
      case 'click':
        await openCamera(handleImageUpload);
        break;
      case 'photo':
        await handlePhotoSelection(handleImageUpload);
        break;
      case 'record':
        await handleVideoSelection(handleImageUpload);
        break;
      case 'video':
        console.log('Video option selected');
        break;
      default:
        break;
    }
  };

  const renderOptionButton = (option: Option) => (
    <TouchableOpacity
      key={option.type}
      style={styles.optionButton}
      onPress={() => handleOptionPress(option)}>
      <Ionicons name={option.icon} size={40} color="white" />
      <Text style={styles.optionLabel}>{option.label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => {}}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Share Story</Text>
        <Text style={styles.headerSubtitle}>
          Share your product's image or video as a story for better outreach
        </Text>
      </View>

      <View style={styles.optionsContainer}>
        {options.map(renderOptionButton)}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  backText: {
    color: 'white',
    marginLeft: 8,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 10,
    color: '#8F8F8F',
    marginTop: 4,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  optionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#333',
    borderRadius: 10,
    marginVertical: 8,
  },
  optionLabel: {
    color: 'white',
    marginTop: 8,
  },
});
