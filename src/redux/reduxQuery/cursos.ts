import api, { API_URL } from './api';

const cursosApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCursos: build.query({
      query: (params) => ({
        url: `${API_URL}/cursos`,
        params,
      }),
    }),
  }),
});

export const { useGetCursosQuery } = cursosApi;
