import React, { useEffect } from "react";
import { useAddProductMutation } from "../../features/product/productAPI";

const productData = {
  name: "Mobile",
  price: 500,
};

export default function AddProduct() {
  const [addProduct, { isError, isLoading, isSuccess, error }] =
    useAddProductMutation();

  useEffect(() => {
    if (isLoading) {
    }

    if (isSuccess) {
    }
    if (isError) {
    }
  }, [isLoading, isSuccess, isError, error]);

  return (
    <div>
      AddProduct
      <button onClick={() => addProduct(productData)}>Add Product</button>
    </div>
  );
}
