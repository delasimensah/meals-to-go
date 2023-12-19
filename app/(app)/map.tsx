import { router } from "expo-router";
import { useState, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";

import { Search, CompactRestaurantInfo } from "@/components";
import { useLocationStore } from "@/hooks/use-location-store";
import { useRestaurantsStore } from "@/hooks/use-restaurants-store";

const MapScreen = () => {
  const { location } = useLocationStore();
  const { restaurants } = useRestaurantsStore();

  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    if (!location) return;

    const northeastLat = location.viewport.northeast.lat;
    const southwestLat = location.viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location]);

  if (!location || restaurants.length === 0) return null;

  return (
    <>
      <Search
        inputStyle="min-h-[30] text-sm"
        searchStyle="rounded-xl bg-white"
      />

      <MapView
        style={{
          width: "100%",
          height: "100%",
        }}
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.01,
        }}
      >
        {restaurants &&
          restaurants.map((restaurant) => {
            return (
              <Marker
                key={restaurant.name}
                title={restaurant.name}
                coordinate={{
                  latitude: restaurant?.geometry?.location.lat!,
                  longitude: restaurant?.geometry?.location.lng!,
                }}
              >
                <Callout
                  onPress={() => router.push(`/restaurant/${restaurant.name}`)}
                >
                  <CompactRestaurantInfo restaurant={restaurant} isMap />
                </Callout>
              </Marker>
            );
          })}
      </MapView>
    </>
  );
};

export default MapScreen;
