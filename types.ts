import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';

export type TStory = {
  id: string;
  name: string;
  image: string;
  isOwnStory?: boolean;
  stories: TMediaItem[];
};

export type TMediaItem = {
  id: string;
  url: string;
  type: 'image' | 'video';
  createdAt: string;
};

export type RootStackParamList = {
  Story: undefined;
  StoryViewer: {initialIndex: number};
  UploadOptions: undefined;
};

export type RootNavigationProp<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
