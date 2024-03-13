import { baseApi } from "@/lib/shared/api/baseApi";

export const resumeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    convertResume: build.mutation<Blob, { accessToken: string; link: string }>({
      query: ({ accessToken, link }) => ({
        url: `/api/ConvertResume?accessToken=${accessToken}&link=${encodeURIComponent(link)}`,
        method: "POST",
        responseHandler: async (response) => {
          const blob = await response.blob();

          window.location.assign(
            window.URL.createObjectURL(await response.blob()),
          );

          return blob;
        },
        cache: "no-cache",
      }),
    }),
  }),
});

export const { useConvertResumeMutation } = resumeApi;
