import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/config";
import Cookies from "js-cookie";

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/` }),
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => ({
        url: "users/profile/me",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }),
    }),

    getUserAppointment: builder.query({
      query: () => ({
        url: "users/appointments/my-appoinments",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }),
    }),

    updateUser: builder.mutation({
      query: (updateData) => ({
        url: `users/${updateData.id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: updateData,
      }),
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useGetUserAppointmentQuery,
  useUpdateUserMutation,
} = usersApi;
