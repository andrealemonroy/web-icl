import api, { API_URL } from './api';

const resolucionesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getResoluciones: build.query({
      query: (params) => ({
        url: `${API_URL}/resoluciones`,
        params,
      }),
    }),
    getResolucionesPeriodo: build.query({
      query: () => ({
        url: `${API_URL}/resolucionesperiodo`,
      }),
    }),
  }),
});

export const {
  useGetResolucionesQuery,
  useGetResolucionesPeriodoQuery,
} = resolucionesApi;
