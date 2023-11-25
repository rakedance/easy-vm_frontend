import { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password');

      return;
    }
    setError('');
    // Обработка входа
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          fullWidth 
          label="Username" 
          variant="outlined" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />
        <TextField 
          fullWidth 
          label="Password" 
          type="password"
          variant="outlined" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}
        <Button 
          type="submit" 
          fullWidth 
          variant="contained" 
          sx={{ mt: 2 }}
        >
          Log In
        </Button>
      </form>
    </Box>
  );
}

export default LoginForm;
