import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';

export type TStory = {
  id: string;
  name: string;
  image: string;
  isOwnStory?: boolean;
  stories: TMediaItem[];
  createdAt: string;
};

export type TMediaItem = {
  id: string;
  url: string;
  type: 'image' | 'video';
};

export type RootStackParamList = {
  Story: undefined;
  StoryViewer: {storyData: TStory[]; initialIndex: number};
  UploadOptions: {storyData: TStory[]};
};

export type RootNavigationProp<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
