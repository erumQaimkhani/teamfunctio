import { createClient } from "@sanity/client";

// Define the client configuration
 export const Client = createClient({
  projectId:"ys8rw8ln" , 
  dataset: "production", 
  apiVersion: "2023-01-01",
  useCdn: true, 
});

