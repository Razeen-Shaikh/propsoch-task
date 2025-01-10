import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setProducts,
  appendProducts,
  setLoading,
  incrementPage,
  setHasMore,
} from "../redux/productsSlice";
import { productsData } from "../data/products";
import Product from "../components/Product";

const Homepage = () => {
  const dispatch = useDispatch();
  const { products, loading, hasMore, page } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    const initialProducts = productsData.slice(0, 4);
    dispatch(setProducts(initialProducts));
  }, [dispatch]);

  const loadMoreProducts = () => {
    if (loading || !hasMore) return;

    dispatch(setLoading(true));
    const newProducts = productsData.slice(page * 4, (page + 1) * 4);
    if (newProducts.length === 0) {
      dispatch(setHasMore(false));
    } else {
      dispatch(appendProducts(newProducts));
      dispatch(incrementPage());
    }
    dispatch(setLoading(false));
  };

  const handleScroll = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    if (scrollHeight - scrollTop <= clientHeight + 1) {
      loadMoreProducts();
    }
  };

  return (
    <div onScroll={handleScroll} style={{ overflowY: "auto", height: "100vh" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Homepage;
