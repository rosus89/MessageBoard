
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Loading from '../loading';
import Header from './header'






function Boards({state}) {

  return (
    state.user ? 
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header user={state.user.username}/>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                    content
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
     :
    <Loading />
  )
 
}

export default Boards