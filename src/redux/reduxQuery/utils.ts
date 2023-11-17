import api, { API_URL } from './api';

const utilsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTiposDocumento: build.query({
      query: () => ({
        url: `${API_URL}/documentostipo?activo=1`,
      }),
    }),
    getAreas: build.query({
      query: () => ({
        url: `${API_URL}/areas?activo=1`,
      }),
    }),
  }),
});

export const { useGetTiposDocumentoQuery, useGetAreasQuery } = utilsApi;
