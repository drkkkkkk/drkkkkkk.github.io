import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uoprhybjrlxluoyepkxc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvcHJoeWJqcmx4bHVveWVpa3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyMDk4OTAsImV4cCI6MjA0Nzc4NTg5MH0.Uw1AeUiDdbi5qahLxSMNjG6HzmGaGXf2DNLHOaXVrS0'; // Use your Supabase public API key

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;