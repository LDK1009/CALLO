import { supabase } from "@/lib/supabaseClient";

export async function signOut() {
  const response = await supabase.auth.signOut();

  return response;
}
