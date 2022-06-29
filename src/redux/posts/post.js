import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://jsonplaceholder.typicode.com',
    baseUrl: 'https://62bb4fb4573ca8f832973eab.mockapi.io/api/v1',
  }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    getPostById: builder.query({
      query: id => `/posts/${id}`,
      providesTags: ['Post'],
    }),
    getAllPosts: builder.query({
      query: () => `/posts`,
      //   For re-render after deleting - need to write Tag, that connects endpoints!!!
      providesTags: ['Post'],
    }),
    deletePost: builder.mutation({
      query: id => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      //   For re-render after deleting - need to write Tag, that connects endpoints!!!
      invalidatesTags: ['Post'],
    }),
    // ------ Another type of passing data!
    // createPost: builder.mutation({
    //   query: newPost => ({
    //     url: '/posts',
    //     method: 'POST',
    //     body: newPost,
    //   }),
    //   invalidatesTags: ['Post'],
    // }),
    createPost: builder.mutation({
      query: dataFromHandler => ({
        url: '/posts',
        method: 'POST',
        body: {
          title: dataFromHandler.title.value,
          body: dataFromHandler.body.value,
        },
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const {
  useGetPostByIdQuery,
  useGetAllPostsQuery,
  useDeletePostMutation,
  useCreatePostMutation,
} = postApi;
