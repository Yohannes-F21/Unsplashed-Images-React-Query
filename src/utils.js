import axios from "axios";
const customFetch = axios.create({
  baseURL:
    "https://api.unsplash.com/search/photos?client_id=HUdvVjUHEY1z73Vb5GZXWfluGsDfu7vJ1ihVe2QJLaY&query=cat",
});

export default customFetch;
