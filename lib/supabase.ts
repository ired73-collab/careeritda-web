import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vpjeyziugsheqxldiqhb.supabase.co'
const supabaseKey = 'sb_publishable_lbooRHJ49VK2a1YZhacFhg_6DBJC-kc'

export const supabase = createClient(supabaseUrl, supabaseKey)