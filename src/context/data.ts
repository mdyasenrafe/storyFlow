import moment from 'moment';
import {TStory} from '../../types';

export const Stories: TStory[] = [
  {
    id: '1',
    name: 'your story',
    image: 'https://i.ibb.co/9HhhmF7/image.png',
    isOwnStory: true,
    stories: [],
  },
  {
    id: '2',
    name: 'Ann',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
    stories: [
      {
        id: 'story1',
        url: 'https://images.unsplash.com/photo-1724581703441-3927a7b6d824?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'image',
        createdAt: moment().subtract(4, 'hours').fromNow(), // Added createdAt
      },
      {
        id: 'story2',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        type: 'video',
        createdAt: moment().subtract(4, 'hours').fromNow(), // Added createdAt
      },
    ],
  },
  {
    id: '3',
    name: 'Arlene',
    image:
      'https://images.unsplash.com/photo-1724581703441-3927a7b6d824?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    stories: [
      {
        id: 'story1',
        url: 'https://images.unsplash.com/photo-1724581703441-3927a7b6d824?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'image',
        createdAt: moment().subtract(6, 'hours').fromNow(), // Added createdAt
      },
      {
        id: 'story2',
        url: 'https://www.w3schools.com/html/movie.mp4',
        type: 'video',
        createdAt: moment().subtract(6, 'hours').fromNow(), // Added createdAt
      },
    ],
  },
  {
    id: '4',
    name: 'Kyle',
    image: 'https://images.unsplash.com/photo-1724581703524-9c8c182be390',
    stories: [
      {
        id: 'story1',
        url: 'https://images.unsplash.com/photo-1724581703524-9c8c182be390',
        type: 'image',
        createdAt: moment().subtract(8, 'hours').fromNow(), // Added createdAt
      },
      {
        id: 'story2',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        type: 'video',
        createdAt: moment().subtract(8, 'hours').fromNow(), // Added createdAt
      },
    ],
  },
  {
    id: '5',
    name: 'Shawn',
    image:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stories: [
      {
        id: 'story1',
        url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        type: 'image',
        createdAt: moment().subtract(10, 'hours').fromNow(), // Added createdAt
      },
      {
        id: 'story2',
        url: 'https://www.w3schools.com/html/movie.mp4',
        type: 'video',
        createdAt: moment().subtract(10, 'hours').fromNow(), // Added createdAt
      },
    ],
  },
  {
    id: '6',
    name: 'Victoria',
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stories: [
      {
        id: 'story1',
        url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        type: 'image',
        createdAt: moment().subtract(12, 'hours').fromNow(), // Added createdAt
      },
      {
        id: 'story2',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        type: 'video',
        createdAt: moment().subtract(12, 'hours').fromNow(), // Added createdAt
      },
    ],
  },
  {
    id: '7',
    name: 'Collin',
    image:
      'https://plus.unsplash.com/premium_photo-1669050703458-10993eb8fe6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stories: [
      {
        id: 'story1',
        url: 'https://plus.unsplash.com/premium_photo-1669050703458-10993eb8fe6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        type: 'image',
        createdAt: moment().subtract(14, 'hours').fromNow(), // Added createdAt
      },
      {
        id: 'story2',
        url: 'https://www.w3schools.com/html/movie.mp4',
        type: 'video',
        createdAt: moment().subtract(14, 'hours').fromNow(), // Added createdAt
      },
    ],
  },
];
