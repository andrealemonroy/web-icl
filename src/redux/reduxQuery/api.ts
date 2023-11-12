import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4200";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  keepUnusedDataFor: 10,
  endpoints: () => ({}),
});

export default api.enhanceEndpoints({
  addTagTypes: [
    "newsApi",
    "videosApi",
    "directivasApi",
    "noticiasApi",
    "normasApi",
    "resolucionesApi",
    "serviciosApi",
    "rendicionesApi",
    "convocatoriasApi",
    "memoriasApi",
  ],
});
