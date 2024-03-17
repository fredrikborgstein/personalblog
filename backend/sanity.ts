import { createClient } from "@sanity/client";
import dotenv from "dotenv";

dotenv.config();

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2021-03-25",
  useCdn: false,
  token: process.env.BLOGPOST_TOKEN_API_KEY,
});

export async function getPosts() {
  const posts =
    await client.fetch(`*[_type == "blogpost"] | order(datePublished desc) {
        title,
        datePublished,
        image,
        slug,
        content
    }`);
  return posts;
}

export default client;
