import { baseApi } from "@/shared/api/baseApi";
import { apiRoutes } from "@/shared/config/routes/apiRoutes";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: ({ page = 1, limit = 10 } = {}) => ({
        url: apiRoutes.users,
        params: { page, limit },
      }),
      providesTags: ["User"],
    }),
    getUserById: build.query({
      query: (id) => `${apiRoutes.users}/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    getProfile: build.query({
      query: () => apiRoutes.profile,
      providesTags: ["User"],
    }),
    createUser: build.mutation({
      query: (newUser) => ({
        url: apiRoutes.users,
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: build.mutation({
      query: ({ id, ...data }) => ({
        url: `${apiRoutes.users}/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "User", id },
        "User",
      ],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `${apiRoutes.users}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "User", id }, "User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useGetProfileQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
