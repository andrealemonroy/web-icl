import api, { API_URL } from './api';

const conveniosApi = api.injectEndpoints({
  endpoints: (build) => ({
    getConvenios: build.query({
      query: (params) => ({
        url: `${API_URL}/convenios`,
        params,
      }),
    }),
    getPeriodosConvenios: build.query({
      query: () => ({
        url: `${API_URL}/conveniosperiodo`,
      }),
    }),
  }),
});

export const { 
    useGetConveniosQuery,
    useGetPeriodosConveniosQuery,
 } =conveniosApi;
