import { supabaseAuthProvider } from "ra-supabase";
import { supabase } from "./supabase";

export const authProvider = supabaseAuthProvider(supabase, {
  getIdentity: async (user) => {
    return {
      id: user.id,
      fullName: user.email,
    };
  },
});
