import React, { useEffect, useState } from "react";
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

  const [visibleCards, setVisibleCards] = useState(0);

  const calculateVisibleCards = () => {
    const cardHeight = 350;
    const viewportHeight = window.innerHeight;
    const productsPerRow = 2;
    const rowsPerViewport = Math.ceil(viewportHeight / cardHeight);

    return rowsPerViewport * productsPerRow;
  };

  useEffect(() => {
    const initialVisibleCards = calculateVisibleCards();
    setVisibleCards(initialVisibleCards);
    const initialProducts = productsData.slice(0, initialVisibleCards);
    dispatch(setProducts(initialProducts));
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(calculateVisibleCards());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const loadMoreProducts = () => {
    if (loading || !hasMore) return;

    dispatch(setLoading(true));
    const newProducts = productsData.slice(
      page * visibleCards,
      (page + 1) * visibleCards
    );
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
    <div onScroll={handleScroll} style={{ overflowY: "auto", height: "80vh" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Homepage;
