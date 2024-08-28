import React, {createContext, useState} from 'react';
import {TMediaItem, TStory} from '../../types';
import {ImageOrVideo} from 'react-native-image-crop-picker';
import {Stories} from './data';

export type StoriesContextType = {
  stories: TStory[];
  handleImageUpload: (imageData: ImageOrVideo) => void;
};

export const StoriesContext = createContext<StoriesContextType | undefined>(
  undefined,
);

type StoriesProviderProps = {
  children: React.ReactNode;
};

export const StoriesProvider: React.FC<StoriesProviderProps> = ({children}) => {
  const [stories, setStories] = useState<TStory[]>(Stories);

  const handleImageUpload = (imageData: ImageOrVideo) => {
    const newStory: TMediaItem = {
      id: String(new Date().getTime()),
      url: imageData.path,
      type: imageData.mime.startsWith('video') ? 'video' : 'image',
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
