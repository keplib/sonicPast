import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://izouvrvrvzzgtrynnltc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6b3V2cnZydnp6Z3RyeW5ubHRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM4NzAxNjIsImV4cCI6MTk3OTQ0NjE2Mn0.XauQHEnK2Blh3_Ooi0FRMvMnsZ0R9OG5hkIcLsmqjgo'
 
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;