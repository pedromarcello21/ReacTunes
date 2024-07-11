import axios from "axios";
import CLIENTID from "./config";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = CLIENTID;
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private", "streaming", "user-read-email", "user-read-playback-state", "user-modify-playback-state", "playlist-modify-public", "playlist-modify-private", "ugc-image-upload"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;