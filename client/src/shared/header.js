import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'



function Header({user}) {
  const navigate = useNavigate();
  const signOut = async () => {
    localStorage.clear()
    return navigate("/signin")
  }
  
    return (
        <AppBar position="absolute">
        <Toolbar
          sx={{
            pr: '24px',
          }}
        > 
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          > 
            Boards
          </Typography>
          <Typography mx={2}>
            {user}
          </Typography>
          <Button variant="contained" color="success" onClick={()=>signOut()}>Sign Out</Button>
        </Toolbar>
      </AppBar>
    )
}

export default Header