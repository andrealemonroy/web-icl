import api, { API_URL } from './api';

const popupApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPopup: build.query({
      query: (params) => ({
        url: `${API_URL}/popups`,
        params,
      }),
    }),
  }),
});

export const { useGetPopupQuery } = popupApi;
