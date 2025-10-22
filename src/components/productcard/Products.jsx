import React from "react";
import { useData } from "../../context/DataContext";
import Card from "./Card";

function Products() {
  const { data, incrementLimit, error } = useData();

  return (
    <div className="m-16 rounded py-5 px-10 relative">
      <h1 className="text-2xl pb-3">Fresh Recommendations</h1>
      <div className="flex flex-wrap">
        {data?.map((product) => (
          <Card key={product.productId} data={product} isFeatured={false} />
        ))}
      </div>
      {error && <h1 className="text-red-500">{error}</h1>}

      <div className="flex justify-center mt-5" onClick={incrementLimit}>
        <button className="border-2 rounded border-black p-3 font-bold hover:border-4">
          Load More
        </button>
      </div>
    </div>
  );
}

export default Products;
