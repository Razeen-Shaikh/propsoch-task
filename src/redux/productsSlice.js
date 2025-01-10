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
    toggleFavorite: (state, action) => {
      const productId = action.payload;
      const product = state.products.find(prod => prod.id === productId);
      if (product) {
        product.favorite = !product.favorite;
      }
    },
  },
});

export const { setProducts, appendProducts, setLoading, setHasMore, incrementPage, toggleFavorite } = productsSlice.actions;
export default productsSlice.reducer;
