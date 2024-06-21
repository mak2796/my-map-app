import {useEffect} from 'react'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';



const SearchControl = () => {
    const map = useMap();
  
    useEffect(() => {
      const provider = new OpenStreetMapProvider();
  
      const searchControl = new GeoSearchControl({
        provider: provider,
        style: 'bar',
        showMarker: true,
        showPopup: false,
        autoClose: true,
        retainZoomLevel: false,
        animateZoom: true,
        keepResult: true,
      });
  
      map.addControl(searchControl);
      return () => map.removeControl(searchControl);
    }, [map]);
  
    return null;
  };

export default  SearchControl