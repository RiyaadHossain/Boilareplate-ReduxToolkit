import { apiSlice } from "../api/apiSlice";

const productSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        addProduct: build.mutation({
            query: (data) => ({
                url: '/product',
                method: 'POST',
                body: data
            })
        }),
        getProducts: build.query({
            query: () => "/products"
        }),
    })
})

export const { useAddProductMutation, useGetJobsQuery } = productSlice