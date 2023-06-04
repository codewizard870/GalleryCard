import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

import "./index.scss";

const Map = () => {
  const center = { lat: 50.110182, lng: 8.6871885 };
  const [selected, setSelected] = useState(center);

  const Map = useMemo(
    () => (
      <GoogleMap
        zoom={18}
        center={center}
        mapContainerStyle={{ height: "100%" }}
      >
        <MarkerF position={selected} />
      </GoogleMap>
    ),
    [center, selected]
  );
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY ?? "",
    libraries: ["places"],
  });

  return (
    <div className="map-wrapper">
      <h1>
        Discover <span>Our Location</span> with Ease: Explore Our Map
      </h1>
      <p>
        Navigate your way to our establishment effortlessly using our integrated Google Map feature. We are conveniently located and easily accessible, allowing you to experience our exceptional offerings firsthand. Plan your visit and enjoy the convenience of finding us with just a few clicks.
      </p>
      <div className="map">
        {isLoaded && Map}
      </div>
      
    </div>
  )
}

export default Map;