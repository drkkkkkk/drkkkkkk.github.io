// Initialize Supabase client
const supabaseUrl = 'https://uoprhybjrlxluoyepkxc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvcHJoeWJqcmx4bHVveWVpa3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyMDk4OTAsImV4cCI6MjA0Nzc4NTg5MH0.Uw1AeUiDdbi5qahLxSMNjG6HzmGaGXf2DNLHOaXVrS0'; // Replace with your Supabase public anon key
const supabase = createClient(supabaseUrl, supabaseKey);

// Google login button event
const googleLoginBtn = document.getElementById('google-login-btn');
googleLoginBtn.addEventListener('click', async () => {
  try {
    // Trigger Google OAuth flow
    const { user, session, error } = await supabase.auth.signInWithOAuth({
      provider: 'google', // Specifying Google provider
    });

    if (error) {
      // Handle any error
      alert('Error logging in: ' + error.message);
    } else {
      // Successfully logged in
      console.log('Logged in as:', user);
      alert('You are logged in with Google!');
      // Redirect or take other actions after login
      window.location.href = 'profile.html'; // Example: Redirect to profile page
    }
  } catch (err) {
    console.error('Google login failed:', err.message);
    alert('Google login failed. Please try again.');
  }
});
