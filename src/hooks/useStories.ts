import {useContext} from 'react';
import {StoriesContext} from '../context/StoriesProvider';

const useStories = () => {
  const context = useContext(StoriesContext);

  if (context === undefined) {
    throw new Error('useStories must be used within a StoriesProvider');
  }

  return context;
};

export default useStories;
