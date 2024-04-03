import {Offers} from '../types/types';
import {points} from './points';

export const offers: Offers = [
  {
    'id': '855b1827-2e5f-4da3-a835-7a4b7886608b',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 318,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': points[0].lat,
      'longitude': points[0].lng,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.8
  },
  {
    'id': 'eec84aed-846d-4f09-91f6-a5f2392ff001',
    'title': 'Wood and stone place',
    'type': 'apartment',
    'price': 497,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': points[1].lat,
      'longitude': points[1].lng,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.3
  },
  {
    'id': '9302bd59-d28a-4c95-b8cd-b59cf32cf8fc',
    'title': 'Tile House',
    'type': 'room',
    'price': 173,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': points[2].lat,
      'longitude': points[2].lng,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6
  },
  {
    'id': '78535fc6-3e08-40c8-9029-90fa0c044596',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 450,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': points[3].lat,
      'longitude': points[3].lng,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.1
  }
];
