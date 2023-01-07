import { apiSlice } from "../api/apiSlice";

const jobSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        addJob: build.mutation({
            query: (data) => ({
                url: '/job',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["Jobs"]
        }),
        getJobs: build.query({
            query: () => "/jobs",
            providesTags: ["Jobs"]
        }),
    })
})

export const { useAddJobMutation, useGetJobsQuery } = jobSlice