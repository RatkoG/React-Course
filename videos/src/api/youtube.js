import axios from "axios";
const KEY = "AIzaSyDKaAyPSgFlVvtdNLn5GEgK2KUWoPlDK-E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
