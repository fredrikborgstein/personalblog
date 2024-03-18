import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "814hwomx",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-03-18",
});

export default client;
