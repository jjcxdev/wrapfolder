import React from "react";
import Autocomplete from "react-google-autocomplete";

const YourComponent = () => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <Autocomplete
      apiKey={googleMapsApiKey}
      style={{ width: "90%" }}
      onPlaceSelected={(place) => {
        console.log(place);
      }}
      options={{
        types: ["(regions)"],
        componentRestrictions: { country: "ru" },
      }}
      defaultValue="Amsterdam"
    />
  );
};

export default YourComponent;
