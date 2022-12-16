import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Loading from '../loading';
import Header from '../../shared/header';
import Topic from './topic';
import Button from '@mui/material/Button';


function Boards({state}) {

  return (
    state.user ? 
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header user={state.user.username}/>
          <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
          <Box sx={{justifyContent:'flex-end', display:"flex", marginBottom:"2em"}}>
          <Button variant="outlined">New</Button>
          </Box>
          <Container>
            <Grid container spacing={3} xs={12}>
                <Topic title="Title" author="author" created={new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }/>
                <Topic title="Title" author="author" created={new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }/>
            </Grid>
            </Container>
          </Container>
        </Box>

     :
    <Loading />
  )
 
}

export default Boards