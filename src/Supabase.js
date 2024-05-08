import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ficurnpexyymjnuuqwxt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpY3VybnBleHl5bWpudXVxd3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxOTMwODksImV4cCI6MjAzMDc2OTA4OX0.tvYpiazqXYbMF_3EeUp3iiN_C_2TXRJGDMvIvfpfJDs"
);

export { supabase };
