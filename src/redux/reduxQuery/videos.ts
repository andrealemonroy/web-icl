import api, { API_URL } from './api';

const videosApi = api.injectEndpoints({
  endpoints: (build) => ({
    getVideos: build.query({
      query: (params) => ({
        url: `${API_URL}/videos`,
        params,
      }),
    }),
  }),
});

export const { useGetVideosQuery } = videosApi;
