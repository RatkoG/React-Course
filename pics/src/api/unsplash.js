import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 81ef353e9c204392060ad2dbfadc962a37c8451e8b4a5baf9eee999f8b3c6401"
  }
});
