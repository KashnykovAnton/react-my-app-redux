// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import { addLon, addLat } from './weather-actions';
import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather, fetchWeatherForFiveDays } from './weather-operations';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    coord: [],
    data: [],
    dataFiveDays: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addLon(state, action) {
      state.coord.push(action.payload);
      //   Example Repeta, works, but example from docs shortier
      //   return { ...state, coord: [...state.coord, action.payload] };
    },
    addLat(state, action) {
      state.coord.push(action.payload);
      //   Example Repeta, works, but example from docs shortier
      //   return { ...state, coord: [...state.coord, action.payload] };
    },
  },
  // if use async operations - use extraReducers! otherwise - reducers
  extraReducers: builder => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchWeather.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchWeatherForFiveDays.fulfilled, (state, action) => {
      state.dataFiveDays = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchWeatherForFiveDays.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchWeatherForFiveDays.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //   ------ !!!!! ------this case doesn't work.... From Repeta lection
    // [fetchWeather.fulfilled]: (state, action) => {
    // if need to add to prev state new data - do it:
    // return {...state, data: [...state.data, ...action.payload]}
    // it is VERY IMPORTANT in this case - do spread!!!!
    //   return { ...state, date: action.payload };
    // },
    // [fetchWeather.pending]: state => {
    //   return { ...state, isLoading: true };
    // },
    // [fetchWeather.fulfilled]: state => {
    //   return { ...state, isLoading: false };
    // },
    // [fetchWeather.rejected]: state => {
    //   return { ...state, isLoading: false };
    // },
    // [fetchWeather.rejected]: (state, action) => {
    //   return {...state,error: action.payload};
    // },
    // [fetchWeather.pending]: (state, _) => {
    //   return {...state, error: null};
    // },
  },
});

export default weatherSlice.reducer;

// ----- OLD version with AsyncThunk

// const coordReducer = createReducer([], {
//   [addLon]: (state, action) => [...state, action.payload],
//   [addLat]: (state, action) => [...state, action.payload],
// });

// const dataReducer = createReducer(
//   {},
//   {
//     [fetchWeather.fulfilled]: (_, action) => action.payload,
//   },
// );

// const loadingReducer = createReducer(false, {
//   [fetchWeather.pending]: () => true,
//   [fetchWeather.fulfilled]: () => false,
//   [fetchWeather.rejected]: () => false,
// });

// const errorReducer = createReducer(null, {
//   [fetchWeather.rejected]: (_, action) => action.payload,
//   [fetchWeather.pending]: () => null,
// });

// export default combineReducers({
//   coord: coordReducer,
//   data: dataReducer,
//   isLoading: loadingReducer,
//   error: errorReducer,
// });
