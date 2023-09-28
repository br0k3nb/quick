import { Box, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Navbar from './layouts/Navbar';

import './index.css'

export default function App() {

  return (
    <Box>
      <Navbar />
      <Container maxWidth="sm">
        <TextField 
          label="Search"
          variant="outlined"
          InputProps={{ sx: { borderRadius: 3 } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#404040' },
              '&:hover fieldset': { borderColor: '#404040' },
              '&.Mui-focused fieldset': { borderColor: '#404040' },
            },
            'input': { color: 'white' },
            "& .MuiFormLabel-root": { color: "white" },
            "& .MuiFormLabel-root.Mui-focused": { color: "white" },
            '& > :not(style)': { width: '600px', mt: 5 }
          }}
        />
      </Container>
      <Container maxWidth="xl">
        <Typography variant="h5" sx={{ mt: 10, mb: 5, color: "white" }}>
          Notes
        </Typography>
      </Container>
    </Box>
  )
}
