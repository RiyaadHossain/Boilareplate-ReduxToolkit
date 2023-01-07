import React, { useEffect } from "react";
import { useGetProductQuery } from "../../features/product/productAPI";

export default function Product() {
  const { isError, isFetching, isSuccess, data, error } = useGetProductQuery();

  useEffect(() => {
    if (isFetching) {
    }

    if (isSuccess) {
    }
    if (isError) {
    }
  }, [isFetching, isSuccess, isError, error, data]);

  return (
    <div>
      Product
      {data.data.map((product) => (
        <p>{product}</p>
      ))}
    </div>
  );
}
