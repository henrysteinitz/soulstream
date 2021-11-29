import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vguvztpporpmrydphmgl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMjA5MTY5OCwiZXhwIjoxOTQ3NjY3Njk4fQ.kVPsM9mfSejym_IJ2W0cBiURPEUIMq6ozLQLIKbrHJs"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase