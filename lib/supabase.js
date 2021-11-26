import { createClient } from '@supabase/supabase-js'


const supabase = createClient('https://vguvztpporpmrydphmgl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMjA5MTY5OCwiZXhwIjoxOTQ3NjY3Njk4fQ.kVPsM9mfSejym_IJ2W0cBiURPEUIMq6ozLQLIKbrHJs')
export default supabase