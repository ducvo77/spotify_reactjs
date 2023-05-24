import axiosInstance from "../axios";

export const getAlbum = async () => {
  const response = await axiosInstance.get(`/albums`);
  return response;
};
