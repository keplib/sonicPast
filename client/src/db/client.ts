import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.VUE_APP_SUPABASEURL || "";
const supabaseKey: string = process.env.VUE_APP_SUPABASEKEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
