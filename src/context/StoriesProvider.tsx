import React, {createContext, useState} from 'react';
import {TMediaItem, TStory} from '../../types';
import {ImageOrVideo} from 'react-native-image-crop-picker';
import {Stories} from './data';
import {MultiMediaUploadResult} from '../utils/mediaHelper';
import moment from 'moment';

export type StoriesContextType = {
  stories: TStory[];
  handleImageUpload: (imageData: MultiMediaUploadResult) => void;
};

export const StoriesContext = createContext<StoriesContextType | undefined>(
  undefined,
);

type StoriesProviderProps = {
  children: React.ReactNode;
};

export const StoriesProvider: React.FC<StoriesProviderProps> = ({children}) => {
  const [stories, setStories] = useState<TStory[]>(Stories);

  const handleImageUpload = (imageData: MultiMediaUploadResult) => {
    const newStory: TMediaItem = {
      id: String(new Date().getTime()),
      url: imageData.path as string,
      type: imageData?.file?.type?.startsWith('video') ? 'video' : 'image',
      createdAt: moment().fromNow(),
    };

    setStories(prevStories =>
      prevStories.map(story => {
        if (story.isOwnStory) {
          return {
            ...story,
            stories: [...(story.stories || []), newStory],
          };
        }
        return story;
      }),
    );
  };

  return (
    <StoriesContext.Provider value={{stories, handleImageUpload}}>
      {children}
    </StoriesContext.Provider>
  );
};
