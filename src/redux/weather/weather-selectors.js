export const getLon = state => state.weather.coord[0];
export const getLat = state => state.weather.coord[1];

export const getCoord = state => state.weather.coord;

export const getData = state => state.weather.data;

export const getLoading = state => state.weather.isLoading;
