# My Map Application

This map application includes features like searching for locations, zooming in and out, a button to reset the map view to the original position, and visual markers (circles) to show data from a GeoJSON url data provided by user.

##

We are using two library:
Leaflet: Leaflet is a library to help create interactive maps. We also install react-leaflet, which allows us to use Leaflet with React easily.

leaflet-geosearch: This adds search functionality to our map.

##

We have tow files in feature folder:

1. MapView : This is where all the magic happens which contain the code to display the map and its features.
2. SearchControl: Here we have code related to serch functionality.

MapContainer: Initializes the map.
TileLayer: Adds the map tiles from OpenStreetMap.
SearchControl: Adds a search bar to the map.
HomeButton: Adds a button to reset the map view.
ZoomControl: Adds zoom in and zoom out buttons.
useEffect: Fetches GeoJSON data from the specified URL.
renderCircles: Creates circles on the map based on the GeoJSON data.