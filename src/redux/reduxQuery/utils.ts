import api, { API_URL } from './api';

const utilsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTiposDocumento: build.query({
      query: () => ({
        url: `${API_URL}/documentostipo`,
      }),
    }),
    getAreas: build.query({
      query: () => ({
        url: `${API_URL}/areas`,
      }),
    }),
  }),
});

export const { useGetTiposDocumentoQuery, useGetAreasQuery } = utilsApi;
