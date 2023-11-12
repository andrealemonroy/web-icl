import api, { API_URL } from './api';

const directivasApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDirectivas: build.query({
      query: (params) => ({
        url: `${API_URL}/directivas`,
        params,
      }),
    }),
    getDirectivasPeriodo: build.query({
      query: () => ({
        url: `${API_URL}/directivasperiodo`,
      }),
    }),
  }),
});

export const { useGetDirectivasQuery, useGetDirectivasPeriodoQuery } =
  directivasApi;
