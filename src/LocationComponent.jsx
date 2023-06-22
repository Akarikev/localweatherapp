import useGeolocation from "./useGeolocation";

const LocationComponent = () => {
  const { latitude, longitude, error } = useGeolocation();

  return (
    <div>
      {latitude && longitude ? (
        <div>
          Latitude: {latitude}
          <br />
          Longitude: {longitude}
        </div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>Fetching location...</div>
      )}
    </div>
  );
};

export default LocationComponent;
