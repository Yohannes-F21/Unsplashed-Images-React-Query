import axios from "axios";

const customFetch = axios.create({
  baseURL: `https://api.unsplash.com/search`,
});

export default customFetch;
