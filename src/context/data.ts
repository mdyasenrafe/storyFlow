import moment from 'moment';
import {TStory} from '../../types';

export const Stories: TStory[] = [
  {
    id: '1',
    name: 'your story',
    image: 'https://i.ibb.co/9HhhmF7/image.png',
    isOwnStory: true,
    createdAt: moment().subtract(2, 'hours').fromNow(),
    stories: [],
  },
  {
    id: '2',
    name: 'Ann',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
    createdAt: moment().subtract(4, 'hours').fromNow(), // 4 hours ago
    stories: [
      {
        id: 'story1',
        url: 'https://images.unsplash.com/photo-1724581703441-3927a7b6d824?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'image',
      },
      {
        id: 'story2',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        type: 'video',
      },
    ],
  },
  {
    id: '3',
    name: 'Arlene',
    image:
      'https://images.unsplash.com/photo-1724581703441-3927a7b6d824?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    createdAt: moment().subtract(6, 'hours').fromNow(), // 6 hours ago
    stories: [
      {
        id: 'story1',
        url: 'https://images.unsplash.com/photo-1724581703441-3927a7b6d824?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'image',
      },
      {
        id: 'story2',
        url: 'https://www.w3schools.com/html/movie.mp4',
        type: 'video',
      },
    ],
  },
  {
    id: '4',
    name: 'Kyle',
    image: 'https://images.unsplash.com/photo-1724581703524-9c8c182be390',
    createdAt: moment().subtract(8, 'hours').fromNow(), // 8 hours ago
    stories: [
      {
        id: 'story1',
        url: 'https://images.unsplash.com/photo-1724581703524-9c8c182be390',
        type: 'image',
      },
      {
        id: 'story2',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        type: 'video',
      },
    ],
  },
  {
    id: '5',
    name: 'Shawn',
    image:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    createdAt: moment().subtract(10, 'hours').fromNow(), // 10 hours ago
    stories: [
      {
        id: 'story1',
        url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        type: 'image',
      },
      {
        id: 'story2',
        url: 'https://www.w3schools.com/html/movie.mp4',
        type: 'video',
      },
    ],
  },
  {
    id: '6',
    name: 'Victoria',
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    createdAt: moment().subtract(12, 'hours').fromNow(), // 12 hours ago
    stories: [
      {
        id: 'story1',
        url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        type: 'image',
      },
      {
        id: 'story2',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        type: 'video',
      },
    ],
  },
  {
    id: '7',
    name: 'Collin',
    image:
      'https://plus.unsplash.com/premium_photo-1669050703458-10993eb8fe6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    createdAt: moment().subtract(14, 'hours').fromNow(), // 14 hours ago
    stories: [
      {
        id: 'story1',
        url: 'https://plus.unsplash.com/premium_photo-1669050703458-10993eb8fe6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        type: 'image',
      },
      {
        id: 'story2',
        url: 'https://www.w3schools.com/html/movie.mp4',
        type: 'video',
      },
    ],
  },
];
