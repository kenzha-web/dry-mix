import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../../utils/url";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: ({id}) => {
                console.log({id})
                return `/products/${id}`;
            },
            providesTags: ['Product'],
        })
    })
})

export const {useGetProductQuery} = apiSlice;
