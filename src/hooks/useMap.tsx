import { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Location } from '../types/types';

const useMap = (mapRef: React.MutableRefObject<HTMLElement | null>, location: Location): L.Map | null => {
  const [map, setMap] = useState<L.Map | null>(null);
  const isInitialized = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current && !isInitialized.current) {
      // Initialize the map only if it hasn't been initialized yet
      const newMap = L.map(mapRef.current, {
        center: [location.latitude, location.longitude],
        zoom: location.zoom
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(newMap);

      setMap(newMap);
      isInitialized.current = true; // Mark as initialized
    }

    // Update the map view when location changes
    if (map && (map.getZoom() !== location.zoom || !map.getCenter().equals([location.latitude, location.longitude]))) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [mapRef, map, location]);

  return map;
};

export default useMap;
