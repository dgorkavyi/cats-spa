import axios from "axios";

const url = "https://api.thecatapi.com/v1/images/search?mime_types=jpg";
const config = {
  headers: {
    "x-api-key":
      "live_w25wvCY3E1vZABmwQLeQEoqUGb9ulIji5dddLOeQ06VKShaAHX5ZGinuqbwEjKHQ",
  },
};

export default async function getRandomImage() {
  try {
    return await axios.get(url, config);
  } catch (error: any) {
    throw new Error(error.message);
  }
  return [];
}
