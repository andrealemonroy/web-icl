import api, { API_URL } from './api';

const newsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query({
      query: (params) => ({
        url: `${API_URL}/noticias`,
        params,
      }),
    }),
    getImageByNewsId: build.query({
      query: (id) => ({
        url: `${API_URL}/noticias/${id}/imagen`,
      }),
    }),
  }),
});

export const { useGetNewsQuery, useGetImageByNewsIdQuery } = newsApi;
