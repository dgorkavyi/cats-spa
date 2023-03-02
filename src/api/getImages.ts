import axios from "axios";

const url = (lim = 10, breed_id = "", order = "ASC") => {
  if (breed_id !== "")
    return `https://api.thecatapi.com/v1/images/search?limit=${lim}&breed_ids=${breed_id}&order=${order}`;
  return `https://api.thecatapi.com/v1/images/search?limit=${lim}&order=${order}`;
};
const config = {
  headers: {
    "x-api-key":
      "live_w25wvCY3E1vZABmwQLeQEoqUGb9ulIji5dddLOeQ06VKShaAHX5ZGinuqbwEjKHQ",
  },
};

export default async function getImages(limit = 10, breed = "", order = "ASC") {
  try {
    return await axios.get(url(limit, breed, order), config);
  } catch (error: any) {
    throw new Error(error.message);
  }
  return [];
}
