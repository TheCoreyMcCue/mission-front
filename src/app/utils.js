import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "at08bm9i",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_TOKEN, // Only if you want to update content with the client
});
