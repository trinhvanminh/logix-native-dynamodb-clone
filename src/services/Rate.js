import axiosClient, { baseUrl } from "./AxiosClient";

export const createOrUpdateRateApi = async ({ movie_id, rate_status }) => {
  const url = `${baseUrl}/api/rates/${movie_id}`;
  try {
    const response = await axiosClient.patch(url, { rate_status });
    return { response: response.data, error: null };
  } catch (err) {
    console.log(err);
    return { response: null, error: err.response?.data?.message };
  }
};
