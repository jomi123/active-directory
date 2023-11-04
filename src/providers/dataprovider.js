import { supabaseDataProvider } from "ra-supabase";
import { supabase } from "./supabase";

export const dataProvider = supabaseDataProvider({
  instanceUrl: process.env.REACT_APP_INSTANCE_URL,
  apiKey: process.env.REACT_APP_API_KEY,
  supabaseClient: supabase,
});
