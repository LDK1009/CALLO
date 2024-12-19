import { supabase } from "@/lib/supabaseClient";
import { signUpType } from "@/types/auth/signUp.type";

export async function signUp({ email, password }: signUpType) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
}
