import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const URL = ""

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (build) => ({
        addJob: build.mutation({
            query: (data) => ({
                url: '/job',
                method: 'POST',
                body: data
            }),
        }),
        getJobs: build.query({
            query: () => "/jobs",
        }),
    })
})

export const { useAddJobMutation, useGetJobsQuery } = apiSlice