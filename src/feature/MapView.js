

import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap, Circle, ZoomControl } from 'react-leaflet';
import SearchControl from './SearchControl'; 
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';

const geojsonUrl = `https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/LATEST_CORE_SITE_RE
ADINGS/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson`;



const HomeButton = () => {
  const map = useMap();

  const handleHome = () => {
    map.setView([43.69, -100.33], 4);
  };

  return (
    <button onClick={handleHome} style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1000 }}>
      Home
    </button>
  );
};

const MapView = () => {
  const mapRef = useRef(null);
  const [geoJsonData, setGeoJsonData] = useState();

  useEffect(() => {
    
   getMapData()
  }, []);

  async function getMapData(){
    let response = await fetch(geojsonUrl);
    let data = await response.json();
    setGeoJsonData(data)
  }
  const renderCircles = () => {
    if (!geoJsonData) return null;

    return geoJsonData.features.map((feature, index) => {
      const [longitude, latitude] = feature.geometry.coordinates;
      return (
        <Circle
          key={index}
          center={[latitude, longitude]}
          radius={0.5 * 10000}
          color="red"
          fillColor="red"
          fillOpacity={0.5}
        />
      );
    });
  };

  return (
    <div>
      <MapContainer
        center={[43.69, -100.33]}
        zoom={4}
        style={{ height: '100vh', width: '100%' }}
        zoomControl={false}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <SearchControl />
        <HomeButton />
        <ZoomControl position="topright" />
        {renderCircles()}
      </MapContainer>
    </div>
  );
};

export default MapView;


