import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "9hu3kzqj",
  dataset: "production",
  apiVersion: "2025-05-23",
  useCdn: false,
});