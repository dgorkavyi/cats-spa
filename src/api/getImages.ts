import axios from "axios";
import config from "./config";

const url = (limit = 10, breed_id = "", order = "ASC", type: string) => {
  if (breed_id !== "")
    return `https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=${breed_id}&order=${order}&mime_type=${type}`;
  return `https://api.thecatapi.com/v1/images/search?limit=${limit}&order=${order}&mime_type=${type}`;
};

export default async function getImages(
  limit: number = 10,
  breed: string = "",
  order: string = "ASC",
  type: string = "jpg"
) {
  try {
    return await axios.get(url(limit, breed, order, type), config);
  } catch (error: any) {
    throw new Error(error.message);
  }
  return [];
}
