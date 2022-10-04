import { createClient } from "@supabase/supabase-js";

const supabaseUrl: any = process.env.VUE_APP_SUPABASEURL;
const supabaseKey: any = process.env.VUE_APP_SUPABASEKEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
