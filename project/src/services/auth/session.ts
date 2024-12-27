import { supabase } from "@/lib/supabaseClient";
import type { Session, AuthError } from "@supabase/supabase-js";

export async function getSession(): Promise<{ data: { session: Session | null }; error: AuthError | null }> {
  const response = await supabase.auth.getSession();

  return response;
}
