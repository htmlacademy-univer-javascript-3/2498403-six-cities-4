import {Offer} from '../types/types';
export const nearPlaces: Offer[] = [
  {
    id: '1',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.38333, longitude: 4.9, zoom: 8 }
    },
    location: { latitude: 52.38333, longitude: 4.9, zoom: 8 },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/room.jpg'
  },
  {
    id: '2',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.38334, longitude: 4.899, zoom: 8 }
    },
    location: { latitude: 52.38334, longitude: 4.899, zoom: 8 },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: '3',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.38335, longitude: 4.898, zoom: 8 }
    },
    location: { latitude: 52.38335, longitude: 4.898, zoom: 8 },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-03.jpg'
  }
];
