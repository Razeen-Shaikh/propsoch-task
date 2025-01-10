import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: false,
  hasMore: true,
  page: 1,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    appendProducts: (state, action) => {
      state.products = [...state.products, ...action.payload];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
  },
});

export const { setProducts, appendProducts, setLoading, setHasMore, incrementPage } = productsSlice.actions;
export default productsSlice.reducer;
