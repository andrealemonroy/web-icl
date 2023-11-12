import api, { API_URL } from './api';

const normasApi = api.injectEndpoints({
  endpoints: (build) => ({
    getNormas: build.query({
      query: (params) => ({
        url: `${API_URL}/normas`,
        params,
      }),
    }),
  }),
});

export const { useGetNormasQuery } = normasApi;
