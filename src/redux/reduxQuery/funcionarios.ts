import api, { API_URL } from './api';

const funcionariosApi = api.injectEndpoints({
  endpoints: (build) => ({
    getFuncionarios: build.query({
      query: (params) => ({
        url: `${API_URL}/funcionarios`,
        params,
      }),
    }),
  }),
});

export const { useGetFuncionariosQuery } = funcionariosApi;
