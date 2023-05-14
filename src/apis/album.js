import axiosInstance from "../axios";

export const getAlbum = async () => {
  const response = await axiosInstance.get(`/browse/new-releases`);
  return response;
};
