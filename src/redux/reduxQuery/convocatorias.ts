import api, { API_URL } from './api';

const convocatoriasApi = api.injectEndpoints({
  endpoints: (build) => ({
    getConvocatorias: build.query({
      query: (params) => ({
        url: `${API_URL}/convocatorias`,
        params,
      }),
    }),
    getConvocatoriasPeriodo: build.query({
      query: (params) => ({
        url: `${API_URL}/convocatoriasperiodo`,
        params,
      }),
    }),
  }),
});

export const { useGetConvocatoriasQuery, useGetConvocatoriasPeriodoQuery } =
  convocatoriasApi;
