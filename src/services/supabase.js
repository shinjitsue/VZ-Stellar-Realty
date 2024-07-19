import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

// URL for images
export const propertyImageUrl =
  "https://sqgjbbugvuoetuwzfzfg.supabase.co/storage/v1/object/public/property/public/";
