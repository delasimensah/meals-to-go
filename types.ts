export type Location = {
  lat: number;
  lng: number;
  viewport: {
    northeast: { lat: number; lng: number };
    southwest: { lat: number; lng: number };
  };
};

export type Restaurant = {
  name: string;
};
