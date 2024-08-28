import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Ionicons} from '@expo/vector-icons'; // Import vector icons

// Define types for options
type Option = {
  type: 'camera' | 'video';
  icon: 'camera-outline' | 'videocam-outline';
  label: string;
};

const options: Option[] = [
  {
    type: 'camera',
    icon: 'camera-outline',
    label: 'Camera',
  },
  {
    type: 'video',
    icon: 'videocam-outline',
    label: 'Video',
  },
];

export const UploadOptions = () => {
  const renderOptionButton = (option: Option) => (
    <TouchableOpacity
      key={option.type}
      style={styles.optionButton}
      onPress={() => {}}>
      <Ionicons name={option.icon} size={40} color="white" />
      <Text style={styles.optionLabel}>{option.label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          /* Add back navigation here */
        }}>
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

      {/* Option Buttons */}
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
    width: 100,
    height: 100,
    backgroundColor: '#333',
    borderRadius: 10,
    marginVertical: 8,
  },
  optionLabel: {
    color: 'white',
    marginTop: 8,
  },
});
