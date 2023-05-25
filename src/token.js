import axios from "axios";

const client_id = "e1635f4d53d0424692deef2928208b95";
const client_secret = "b60fb1a72a1a47e2a7f2fff09d694472";

const authOptions = {
  url: "https://accounts.spotify.com/api/token",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
};

const getAccessToken = async () => {
  const cachedToken = localStorage.getItem("spotifyAccessToken");
  const tokenExpiration = localStorage.getItem("spotifyTokenExpiration");

  if (
    cachedToken &&
    tokenExpiration &&
    Date.now() < parseInt(tokenExpiration)
  ) {
    // Trả về token đã lưu trữ trong localStorage nếu còn hợp lệ
    return cachedToken;
  } else {
    // Gọi hàm lấy token mới từ Spotify API
    const response = await axios.post(authOptions.url, authOptions.data, {
      headers: authOptions.headers,
    });
    const accessToken = response.data.access_token;

    // Lưu trữ token mới và thời gian hết hạn vào localStorage
    const expirationTime = Date.now() + 60 * 60 * 1000; // Hết hạn sau 1 giờ
    localStorage.setItem("spotifyAccessToken", accessToken);
    localStorage.setItem("spotifyTokenExpiration", expirationTime.toString());

    return accessToken;
  }
};

const refreshToken = async () => {
  const accessToken = await getAccessToken();
  // console.log("Access token:", accessToken);

  // Lưu trữ token mới vào localStorage
  localStorage.setItem("spotifyAccessToken", accessToken);

  // Lập lịch gọi lại refreshToken sau 1 giờ
  setTimeout(refreshToken, 3600 * 1000);
  // console.log(1);
};

// Khởi động lấy access token lần đầu
// refreshToken();

export default refreshToken;
