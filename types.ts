type Coordinates = {
  lat: number;
  lng: number;
};

type ViewPort = {
  northeast: Coordinates;
  southwest: Coordinates;
};

type Geometry = {
  location: Coordinates;
  viewport: ViewPort;
};

export type Location = {
  lat: number;
  lng: number;
  viewport: ViewPort;
};

export type Restaurant = {
  name?: string;
  businessStatus?: string;
  geometry?: Geometry;
  icon?: string;
  placeId?: string;
  rating?: number;
  reference?: string;
  userRatingsTotal?: number;
  address?: string;
  types?: string[];
  scope?: string;
  photos: string[];
  isOpenNow: boolean;
  isClosedTemporarily: boolean;
};
