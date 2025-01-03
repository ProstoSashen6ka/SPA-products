import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Products } from '../types/products.type'

export const fakeStoreApi = createApi({
    reducerPath: 'fakestore/api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<Products, void>({
          query: () => 'products',
        }),
    }),
})


export const {useGetProductsQuery} = fakeStoreApi