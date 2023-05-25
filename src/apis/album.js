import axiosInstance from "../axios";

export const getAlbum = async () => {
  const response = await axiosInstance.get(
    "/browse/categories?country=VN&offset=0&limit=5",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("spotifyAccessToken")}`,
      },
    }
  );

  return response;
};
