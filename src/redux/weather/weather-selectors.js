// export const getLon = state => state.weather.coord[0];
// export const getLat = state => state.weather.coord[1];

const getCoord = state => state.weather.coord;

export const getLon = state => {
  return getCoord(state)[0];
};

export const getLat = state => {
  return getCoord(state)[1];
};

export const getCoordLength = state => {
  const coords = getCoord(state);
  return coords.length;
};

export const getData = state => state.weather.data;

export const getDataFiveDays = state => state.weather.dataFiveDays;

export const getDataFiveDaysList = state => {
  const dataFiveDays = getDataFiveDays(state);
  return dataFiveDays.list;
};

export const getLoading = state => state.weather.isLoading;
