import api, { API_URL } from './api';

const serviciosApi = api.injectEndpoints({
  endpoints: (build) => ({
    getServicios: build.query({
      query: (params) => ({
        url: `${API_URL}/servicios`,
        params,
      }),
    }),
    getServicio: build.query({
      query: (id) => ({
        url: `${API_URL}/servicios?tipo_servicio=${id}`,
      }),
    }),
  }),
});

export const { useGetServiciosQuery, useGetServicioQuery } = serviciosApi;
