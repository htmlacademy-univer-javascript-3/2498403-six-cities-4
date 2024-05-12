import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { MapProps } from '../../types/types';

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ location, offers, specialOfferId }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
      const markerLayer = layerGroup().addTo(map);
      markerLayer.clearLayers();

      offers.forEach((offer) => {
        const isSpecial = offer.id === specialOfferId;
        const markerIcon = isSpecial ? currentCustomIcon : defaultCustomIcon;
        new Marker([offer.location.latitude, offer.location.longitude], {
          icon: markerIcon
        }).addTo(markerLayer);
      });

      return () => {
        markerLayer.clearLayers();
        map.removeLayer(markerLayer);
      };
    }
  }, [map, location, offers, specialOfferId]);

  return <div style={{ height: '500px', width: '100%' }} ref={mapRef}></div>;
}

export default Map;
