import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID nMiVzwIE-wwJ9EH_8QoU7O30a87yYKnPzHM8FbKGy5o",
    },
    params: {
      query: term,
    },
  });
  return response.data.results
};

export default searchImages
