import React from "react";
import productsData from "./components/productsData";
import Product from "./components/Product";

function lesson22() {
  const productComponents = productsData.map((item) => (
    <Product key={item.id} description={item.description} />
  ));
  return <div>{productComponents}</div>;
}

export default lesson22;
