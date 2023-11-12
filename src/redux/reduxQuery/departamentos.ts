import api, { API_URL } from './api';

const departamentosApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDepartamentos: build.query({
      query: (params) => ({
        url: `${API_URL}/departamentosconvenio`,
        params,
      }),
    }),
    getProvicias: build.query({
      query: ({ id_departamento }) => ({
        url: `${API_URL}/provinciasconvenio?id_departamento=${id_departamento}`,
      }),
    }),
    getDistritos: build.query({
      query: ({ id_departamento, id_provincia }) => ({
        url: `${API_URL}/distritosconvenio?id_departamento=${id_departamento}&id_provincia=${id_provincia}`,
      }),
    }),
  }),
});

export const {
  useGetDepartamentosQuery,
  useGetProviciasQuery,
  useGetDistritosQuery,
} = departamentosApi;
