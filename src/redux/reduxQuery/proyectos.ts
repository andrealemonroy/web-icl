import api, { API_URL } from './api';

const proyectosApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProyectos: build.query({
      query: (params) => ({
        url: `${API_URL}/proyectos`,
        params,
      }),
    }),
    getProyecto: build.query({
      query: (id) => `${API_URL}/proyectos/${id}`,
    }),
  }),
});

export const { useGetProyectosQuery, useGetProyectoQuery } = proyectosApi;
